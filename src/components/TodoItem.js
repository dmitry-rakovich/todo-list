import { useDispatch } from "react-redux";
import { removeTodo, deleteTodo, editTodo, saveTodo } from '../store/todoSlice'
import { useState } from "react";

const TodoItem = ({ id, title }) => {  
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(null);
  
  const dispatch = useDispatch()

  const editTask = () => {
    dispatch(editTodo({id, title}))
    setEdit(id);
    setValue(title);
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
          {title}
          <button onClick={editTask}>
            Edit todo
          </button>
          <button onClick={() => dispatch(deleteTodo(id))}>Remove todo</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem