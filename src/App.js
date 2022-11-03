
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";


const App = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}));
    setText("");
  };

  return (
    <div className="App">
      <TodoInput
        text={text}
        handleInput={setText}
        addTodo={addTask}
      />
      <TodoList />
    </div>
  );


};


export default App;
