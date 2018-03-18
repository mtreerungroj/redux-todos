import React, { component } from 'react'

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

const withTransformProps = transformFunc => BaseComponent => baseProps => {
  const transformedProps = transformFunc(baseProps)
  return <BaseComponent {...transformedProps} />
}

const FilteredList = withTransformProps(({ list, side }) => ({
  list: list.filter(c => c.side === side)
}))(DisplayList)

const StarWarApp = () => <FilteredList list={starWarsChars} side='dark' />
// list กับ side คือ baseProps

export default StarWarApp
