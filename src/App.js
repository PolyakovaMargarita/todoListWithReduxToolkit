
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, fetchTodos } from "./store/todoSlice";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";


const App = () => {
  const [text, setText] = useState("");
  const { status, error } = useSelector(state => state.todos);
  const dispatch = useDispatch();


  const addTodo = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText("");
    }
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <h1 style={{color: "rgb(223, 207, 207)"}}>Todo List</h1>
      <TodoInput
        text={text}
        handleInput={setText}
        addTodo={addTodo}
      />

      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>Error: {error}</h2>}

      <TodoList />
    </div>
  );


};


export default App;
