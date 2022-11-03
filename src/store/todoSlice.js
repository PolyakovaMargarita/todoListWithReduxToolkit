import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: Date.now(),
        text: action.payload.text,
        complete: false
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    todoCompleted(state, action) {
      const complete = state.todos.find(todo => todo.id === action.payload);
      complete.complete = !complete.complete;
      // state.todos.map(todo => {
      //   if (todo.id !== action.payload) {
      //     return todo;
      //   } else {
      //     todo.complete = !todo.complete;
      //   }
      //   return todo;
      // });
    }
  }
});

export const {addTodo, removeTodo, todoCompleted} = todoSlice.actions;

export default todoSlice.reducer;