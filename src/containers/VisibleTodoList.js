import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/index'

const mapStateToProps = state => ({ todos: state })
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
