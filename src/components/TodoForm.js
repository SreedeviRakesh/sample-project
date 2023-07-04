import classes from './TodoForm.module.css'
import { useRef } from 'react';
import {useDispatch} from 'react-redux'
import { taskActions } from '../store/index';

const TodoForm = (props) => {

    const inputRef = useRef();

    const dispatch = useDispatch()

    const todoSubmitHandler =(event) => {
        event.preventDefault(); 
          
        if(inputRef.current.value.trim().length > 0){     
        dispatch(taskActions.addTask({title: inputRef.current.value, id: Math.random().toString() }))
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