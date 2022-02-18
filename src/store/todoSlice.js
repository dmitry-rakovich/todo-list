import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        const data = await response.json()
        return data
    }
)

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function(id, {dispatch}) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        })
        console.log(response);
        dispatch(removeTodo({id}))
    }
)

export const addNewTodos = createAsyncThunk(
    'todos/addNewTodos',
    async function(text, {dispatch}) {
        const todo = {
            title: text,
            userId: 1,
            completed: false
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        const data = await response.json()
        dispatch(addTodo(data))
    }
)

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        editTodo(state, action) {
            const selectTodo = state.todos.find(todo => todo.id === action.payload.id)
            selectTodo.text = action.payload.text
        },
        saveTodo(state, action) {
            const newTodo = [...state.todos].map((todo) => {
            if (todo.id === action.payload.id) {
            todo.text = action.payload.value;
        }
            return todo;
        });
        state.todos = newTodo
        }
    },
    extraReducers: {
    [fetchTodos.pending]:(state) => {
        state.status = 'loading'
        state.error = null
    },
    [fetchTodos.fulfilled]:(state, action) => {
        state.status = 'resolved'
        state.todos = action.payload
    },
    [fetchTodos.rejected]:(state, action) => {}
}
})

export const {addTodo, removeTodo, editTodo, saveTodo} = todoSlice.actions

export default todoSlice.reducer