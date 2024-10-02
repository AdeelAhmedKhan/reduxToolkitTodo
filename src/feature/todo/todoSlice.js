// naming convention in which we called reducer a slices

import {createSlice, nanoid} from '@reduxjs/toolkit';

// can be array or object
const initialState={
    todos:[
        {
            id:1,
            text:"Hello World"
        }
    ]
}

export const todoSlice =createSlice({
    // slice must have below params with same name
    name:'todo',
    initialState,
    reducers:{
        // below is syntax, you'l get two thing alwyas state, action
        //state: give acces to state, by default have initial state
        // action: holds the passing parameter
        addTodo:(state,action)=>{
            const todo={
                // can use datenow, but nano id is good option    
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
            
        },
        removeTodo:(state,action)=>{
            state.todos= state.todos.filter((todo)=>(todo.id !== action.payload))

        },
        updateTodo:(state,action)=>{
            state.todos.map((todo)=>(todo.id === action.payload.id) ? action.payload.todo : todo)
        }
    
    }
})

// below is also syntax
// must have to pass all individual functionalityes
export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

// also must have to pass the list of reducers for store
export default todoSlice.reducer