import React from "react";
import { useDispatch } from "react-redux";
import { statusTodo } from "./../store/todoSlice";
import { deleteTodo } from "./../store/todoSlice";

import "./../App.css";

const TodoItem = ({ title, id, completed }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <li key={id}>
        <div className="margin">
          <input 
            style={{margin: "0 10px 0 0"}} 
            type="checkbox" 
            checked={completed} 
            onChange={() => dispatch(statusTodo(id))} />
          <span>{title}</span>
        </div>
        <div className="margin">
          <span className="del" onClick={() => dispatch(deleteTodo(id))}>&times;</span>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;