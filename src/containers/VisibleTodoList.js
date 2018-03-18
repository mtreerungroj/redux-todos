import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo, VisibilityFilter } from '../actions'
import { createSelector } from 'reselect'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilter.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilter.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

// selector ช่วยลดปัญหาเรียกโค้ดเดิมซ้ำๆๆ เนื่องจาก state อื่นเปลี่ยน
const todosSelector = state => state.todos
const visibilityFilterSelector = state => state.visibilityFilter
const getVisibleTodosSelector = createSelector(
  [todosSelector, visibilityFilterSelector],
  (todos, visibilityFilter) => getVisibleTodos(todos, visibilityFilter)
)

const mapStateToProps = state => ({
  todos: getVisibleTodosSelector(state)
}) // ชื่อที่สั่งตอน combine reducer ไม่ใช่ชื่อ reducer จริงๆ

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
