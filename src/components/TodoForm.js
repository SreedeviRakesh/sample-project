import classes from './TodoForm.module.css'
import { useRef } from 'react';

const TodoForm = (props) => {

    const inputRef = useRef();

    const todoSubmitHandler =(event) => {
        event.preventDefault();
        const todoInput = { title: inputRef.current.value, id: Math.random().toString()};
        console.log(todoInput)
        if(todoInput.title.trim().length > 0){
            props.onAdd(todoInput);
        }
        
    }

    return(
        <form className={classes.form} onSubmit={todoSubmitHandler}>
        <input type="text" ref={inputRef}/>
        <button>Add</button>
        </form>
    )
}

export default TodoForm;