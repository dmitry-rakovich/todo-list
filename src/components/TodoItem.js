import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";
import { editTodo, saveTodo } from '../store/todoSlice'
import { useState } from "react";

const TodoItem = ({ id, text }) => {  
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(null);
  
  const dispatch = useDispatch()

  const editTask = () => {
    dispatch(editTodo({id, text}))
    setEdit(id);
    setValue(text);
  }

  const saveTask = () => {
    dispatch(saveTodo({id, value}))
    setEdit(null);
  }
  return (
    <div>
      {edit === id ? (
        <div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button onClick={saveTask}>Сохранить</button>
        </div>
      ) : (
        <div>
          {text}
          <button onClick={editTask}>
            Edit todo
          </button>
          <button onClick={() => dispatch(removeTodo({id}))}>Remove todo</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem