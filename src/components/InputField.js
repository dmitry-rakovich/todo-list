const InputField = ({text, setText,     addTodo}) => {
    return (
        <div>
    <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
    </label>
        </div>
    )
}

export default InputField