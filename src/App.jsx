import { useState } from 'react'
import './App.css'
import { useRef, useEffect } from 'react'
import TodoListContext from './context/context'
import Homepage from './components/homepage'

const getDataFromLs = () => {
  const data = localStorage.getItem('inputValue')
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}



function App() {

  const [inputValue, setInputValue] = useState(getDataFromLs())
  const inputRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('inputValue', JSON.stringify(inputValue))
  }, [inputValue])

  return (
    <>
      <TodoListContext.Provider value={{ inputValue, setInputValue, inputRef }}>
        <Homepage />
      </TodoListContext.Provider>
    </>
  )
}

export default App;
