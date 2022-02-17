import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: Date.now(),
                text: action.payload.text
            })
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
    }
})

export const {addTodo, removeTodo, editTodo, saveTodo} = todoSlice.actions

export default todoSlice.reducer