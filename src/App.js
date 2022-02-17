import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from './components/TodoList'
import InputField from "./components/InputField";
import {addTodo} from './store/todoSlice'
import "./App.css";


function App() {
  const [text, setText] = useState("");

  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }

  // const saveTodo = (id) => {
  //   const newTodo = [...todos].map((todo) => {
  //     if (todo.id === id) {
  //       todo.text = value;
  //     }
  //     return todo;
  //   });
  //   setTodos(newTodo);
  //   setEdit(null);
  // };

  return (
    <div className="App">
      <InputField text={text} 
      setText={setText}
      addTodo={addTask}
      />
      <TodoList />
    </div>
  );
}

export default App;
