import React from "react";
import { useDispatch } from "react-redux";
import { todoCompleted } from "./../store/todoSlice";
import { removeTodo } from "./../store/todoSlice";

import "./../App.css";

const TodoItem = ({ text, id, complete }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <li key={id}>
        <div className="margin">
          <input 
            style={{margin: "0 10px 0 0"}} 
            type="checkbox" 
            checked={complete} 
            onChange={() => dispatch(todoCompleted(id))} />
          <span>{text}</span>
        </div>
        <div className="margin">
          <span className="del" onClick={() => dispatch(removeTodo(id))}>&times;</span>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;