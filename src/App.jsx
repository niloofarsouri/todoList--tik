import { useState } from 'react'
import './App.css'
import { useRef } from 'react'
import TodoListContext from './context/context'
import Homepage from './components/homepage'

function App() {

  const [inputValue, setInputValue] = useState([])
  const inputRef = useRef(null)


  return (
    <>
      <TodoListContext.Provider value={{ inputValue, setInputValue, inputRef }}>
        <Homepage />
      </TodoListContext.Provider>
    </>
  )
}

export default App;
