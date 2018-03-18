import React, { Component } from 'react'

const starWarsChars = [
  { name: 'Luke', side: 'light' },
  { name: 'Darth Vader', side: 'dark' },
  { name: 'Obi-wan Kenobi', side: 'light' },
  { name: 'Palpatine', side: 'dark' }
]

const DisplayList = ({ list }) => (
  <div>
    {list.map(c => <div key={c.name}>{c.name}</div>)}
  </div>
)

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

const FilteredList = withTransformProps(({ list, side }) => ({
  list: list.filter(c => c.side === side)
}))(DisplayList)

const StarWarApp = () => <FilteredList list={starWarsChars} side='dark' />
// list กับ side คือ baseProps

export default StarWarApp
