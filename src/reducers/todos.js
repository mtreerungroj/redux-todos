const initial = [
  { id: 1, text: 'foo', completed: false },
  { id: 2, text: 'bar', completed: false }
]

const todos = (state = initial, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        }
      ]
    case 'TOGGLE_TODO': // pure function, return new object without mutation
      return state.map(
        t => (t.id === action.id ? { ...t, completed: !t.completed } : t)
      )
    case 'DELETE_TODO':
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
}

export default todos
