import styles from './index.module.css'




function Todo({ onDone }) {


    return (
        <>
            <div className='todo_list'>

                <ol>
                    {
                        inputValue.map((item, index) => {
                            return (
                                <div className='dolist'>
                                    <li key={index}>{item}</li>
                                    {
                                        done ?
                                            <img src="./icons8-done-100.png" alt="done" />
                                            :
                                            <button onClick={() => onDone(true)}>done</button>
                                    }
                                </div>
                            )
                        })
                    }
                </ol>

            </div>
        </>
    )
}


export default Todo;