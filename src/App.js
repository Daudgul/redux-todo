import React from "react";

import "./App.css";
import Counter from "./features/counter/Counter";
import TodoItem from "./features/counter/TodoItem";

import { useSelector } from "react-redux";
import { selectTodoList } from "./features/counter/counterSlice";
import { useDispatch } from "react-redux";
import { setSort } from "./features/counter/counterSlice";

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);
  const addSort = () => {
    dispatch(setSort());
  };
  return (
    <div className="App">
      <div className="container">
        <button onClick={addSort}>sort</button>
        <div className="container--item">
          {todoList.map((item) => {
            return <TodoItem key={item.id} {...item} />;
          })}
        </div>

        <Counter />
      </div>
    </div>
  );
}

export default App;
