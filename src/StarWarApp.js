import React, { Component } from 'react'

const starWarsChars = [
  { name: 'Luke', side: 'light' },
  { name: 'Darth Vader', side: 'dark' },
  { name: 'Obi-wan Kenobi', side: 'light' },
  { name: 'Palpatine', side: 'dark' }
]

// for non HOC & HOC 1
// const DisplayList = ({ list }) => (
//   <div>
//     {list.map(c => <div key={c.name}>{c.name}</div>)}
//   </div>
// )

// for HOC 2
const DisplayList = ({ list, otherSide, stateHandler }) => (
  <div>
    <button onClick={() => stateHandler(otherSide)}>switch</button>
    {list.map(c => <div key={c.name}>{c.name}</div>)}
  </div>
)

// non HOC
// const FilteredList = ({list, side}) => {
//   lst filtered = list.filter(c => c.side === side)
//   return <DisplayList list={filtered}/>
// }
// alternative
// const withFilterProps = BaseComponent => ({ list, side }) => {
//   const transformedProps = list.filter(c => c.side == side)
//   return <BaseComponent list={transformedProps} />
// }
// const FilteredList = withFilterProps(DisplayList)

// HOC 1
const withTransformProps = transformFunc => BaseComponent => baseProps => {
  const transformedProps = transformFunc(baseProps)
  return <BaseComponent {...transformedProps} />
}

// HOC 2
const withSimpleState = defaultState => BaseComponent => {
  return class withSimpleState extends Component {
    state = { valuse: defaultState }
    updateState = value => this.setState({ value })
    render () {
      return (
        <BaseComponent
          {...this.props}
          stateValue={this.state.value}
          stateHandler={this.updateState}
        />
      )
    }
  }
}

const FilteredList = withTransformProps(
  ({ list, stateValue, stateHandler }) => ({
    list: list.filter(c => c.side === stateValue),
    otherSide: stateValue === 'dark' ? 'light' : 'dark',
    stateHandler
  })
)(DisplayList)

// const StarWarApp = () => <FilteredList list={starWarsChars} side='dark' />
// list กับ side คือ baseProps

const ToggleableFilteredList = withSimpleState('dark')(FilteredList)
const StarWarApp = () => <ToggleableFilteredList list={starWarsChars} />

export default StarWarApp
