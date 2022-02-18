const InputField = ({title, setText, addTodo}) => {
    return (
        <div>
    <label>
        <input value={title} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
    </label>
        </div>
    )
}

export default InputField