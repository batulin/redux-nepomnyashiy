import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action){
            console.log(state)
            console.log(action)
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false
            })
        },
        removeTogo(state, action){
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodoComplete(state, action){
            const toogledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toogledTodo.completed = !toogledTodo.completed;
        }
    }
});

export const {addTodo, removeTogo, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;