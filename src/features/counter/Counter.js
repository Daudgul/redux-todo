import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { saveTodo } from "./counterSlice";

const Counter = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
    setInput("");
  };
  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add!</button>
    </div>
  );
};

export default Counter;
