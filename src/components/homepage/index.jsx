import { useContext, useEffect } from "react";
import Todo from "../todo";
import TodoForm from "../todoform";
import styels from './index.module.css'
import TodoListContext from "../../context/context";


// const getDataFromLs = () => {
//     const data = localStorage.getItem('inputValue')
//     if (data) {
//         return JSON.parse(data)
//     } else {
//         return []
//     }
// }



function Homepage() {


    const { inputRef, inputValue, setInputValue } = useContext(TodoListContext)

    // useEffect(() => {
    //     localStorage.setItem('inputValue', JSON.stringify(inputValue))
    // }, [inputValue])



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

        if (window.confirm('Are you done ?')) {
            const doneValue = inputValue.filter(item => item !== inputValue[i])
            setInputValue(doneValue)
        }

    }


    return (
        <>
            <div className={styels.main}>
                <TodoForm onInput={handleInput} />

                <div className={styels.todo_list}>
                    <Todo onDone={handleDone} />
                </div>

            </div>
        </>
    )
}


export default Homepage;