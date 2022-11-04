import React from "react";

const TodoInput = ({text, handleInput, addTodo}) => (
  <label>
    <input className="inputTodo" value={text} onChange={(e) => handleInput(e.target.value)} />
    <button className="button" onClick={addTodo}>Add todo</button>
  </label>
);

export default TodoInput;