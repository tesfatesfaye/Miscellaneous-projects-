import './App.css'
import jwt_decode from 'jwt-decode'
import React,{ useContext,useState } from 'react'
import { ThemeContext } from './Context/ThemeContext'
function App(props) {
  const{theme, toggleTheme}=useContext(ThemeContext)
  const [todolist,setTodolist]=useState(()=>[])

  return (
    <div className="App">
      {theme}
     </div>
  )
}

export default App
