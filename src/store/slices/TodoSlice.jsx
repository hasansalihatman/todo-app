import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
        state.todos = state.todos.filter((state) => state.id !== action.payload.id)
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
