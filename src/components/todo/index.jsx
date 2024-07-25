import { useContext } from 'react';
import styles from './index.module.css'
import TodoListContext from '../../context/context';




function Todo({ onDone }) {

    const { inputValue } = useContext(TodoListContext)

    return (
        <>
            <ol>
                {
                    inputValue.map((item, index) => {
                        return (
                            <div className={styles.dolist}>

                                <li key={index}>{item.title}</li>
                                <button onClick={() => onDone(index)}>done</button>

                            </div>
                        )
                    })
                }
            </ol>
        </>
    )
}


export default Todo;