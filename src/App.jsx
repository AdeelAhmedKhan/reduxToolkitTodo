import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { store } from "./app/store";
import { Provider} from "react-redux";

function App() {
  
  return (
    // instad of calue from context you use store in redux
    <Provider store={store}>
      <div>
        <h1>TODO using Redux-Toolkit</h1>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  )
}

export default App