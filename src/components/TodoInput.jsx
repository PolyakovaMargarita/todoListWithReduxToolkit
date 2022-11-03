import React from "react";

const TodoInput = ({text, handleInput, addTodo}) => (
  <label>
    <input value={text} onChange={(e) => handleInput(e.target.value)} />
    <button onClick={addTodo}>Add todo</button>
  </label>
);

export default TodoInput;