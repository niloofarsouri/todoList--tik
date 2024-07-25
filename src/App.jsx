import { useState } from 'react'
import './App.css'
import { useRef } from 'react'

// const TODOLIST = []

function App() {

  const [inputValue, setInputValue] = useState([])
  const inputRef = useRef(null)

  const handleInput = () => {

    // const valueDo = inputRef.current.value
    const valueDo = {
      title: inputRef.current.value,
      isdone: 'false',
    }
    // console.log(JSON.stringify(valueDo))
    const copy = [...inputValue]
    copy.push(valueDo)
    setInputValue(copy)

    inputRef.current.value = ''
    inputRef.current.focus()
  }


  const handleDone = (i) => {

    inputValue[i].isdone = 'true'
    console.log(inputValue[i].isdone)
    const doneValue = inputValue.filter(item => item !== inputValue[i])
    // console.log(doneValue)
    setInputValue(doneValue)


  }



  return (
    <>
      <div className='main'>

        <div className='main_header'>
          <div className='write_todo'>
            <h2>Todo List</h2>
            <div className='sub_write_todo'>
              <input type="text" placeholder='write your works...' ref={inputRef} />
              <button onClick={handleInput}>Add do</button>
            </div>
          </div>
        </div>


        <div className='todo_list'>

          <ol>
            {
              inputValue.map((item, index) => {
                return (
                  <div className='dolist'>

                    <li key={index}>{item.title}</li>
                    <button onClick={() => handleDone(index)}>done</button>

                  </div>
                )
              })
            }
          </ol>

        </div>

      </div>
    </>
  )
}

export default App;
