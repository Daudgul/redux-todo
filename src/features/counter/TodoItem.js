import React from "react";
import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { setCheck, setFilter } from "./counterSlice";

const TodoItem = ({ id, done, item }) => {
  const dispatch = useDispatch();
  const checkMyId = () => {
    dispatch(setCheck(id));
  };
  const filterData = () => {
    dispatch(setFilter(id));
  };
  return (
    <div className="todoItem">
      <p className={done && "todoItem--done"} onClick={checkMyId}>
        {item}
      </p>
      <button onClick={filterData}>delete</button>
    </div>
  );
};

export default TodoItem;
