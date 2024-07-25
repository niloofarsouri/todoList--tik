import { useContext } from 'react';
import styles from './index.module.css'
import TodoListContext from '../../context/context';


function TodoForm({ onInput }) {

    const { inputRef } = useContext(TodoListContext)

    return (
        <>
            <div className={styles.main_header}>
                <div className={styles.write_todo}>
                    <h2>Todo List</h2>
                    <div className={styles.sub_write_todo}>
                        <input type="text" placeholder='write your works...' ref={inputRef} />
                        <button onClick={onInput}>Add do</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default TodoForm;