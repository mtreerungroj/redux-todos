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
    case 'TOGGLE_TODO':
      return state.map(
        t => (t.id === action.id ? { ...t, completed: !t.completed } : t)
      )
    default:
      return state
  }
}

export default todos
