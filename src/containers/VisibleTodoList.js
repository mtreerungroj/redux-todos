import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index'

const mapStateToProps = state => ({ todos: state.todos }) // ชื่อที่สั่งตอน combine reducer ไม่ใช่ชื่อ reducer จริงๆ
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
