let nextTodoId = 0
// action creator
// ควร gen id ตรงนี้ ไม่ใช่ที่ reducer
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
