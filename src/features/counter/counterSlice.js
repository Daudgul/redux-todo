import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
    setFilter: (state, action) => {
      const newState = state.todoList.filter(
        (item) => action.payload !== item.id
      );
      return {
        ...state,
        todoList: newState,
      };
    },
    setSort: (state, action) => {
      state.todoList.reverse();
    },
  },
});

export const { saveTodo, setCheck, setFilter, setSort } = counterSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;

export default counterSlice.reducer;
