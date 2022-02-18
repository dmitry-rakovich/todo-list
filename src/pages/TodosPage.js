import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoList from '../components/TodoList'
import InputField from "../components/InputField";
import {addTodo} from '../store/todoSlice'
import "../App.css";

const TodosPage = () => {
    const [text, setText] = useState("");
  
    const dispatch = useDispatch()
  
    const addTask = () => {
      dispatch(addTodo({text}))
      setText('')
    }
  
    return (
      <div className="todo_list">
        <h1>Todo list</h1>
        <InputField text={text} 
        setText={setText}
        addTodo={addTask}
        />
        <TodoList />
      </div>
    );
}

export {TodosPage}