import classes from './TodoForm.module.css'
import { useRef } from 'react';
import {useDispatch} from 'react-redux'
import { taskActions } from '../store/index';
import AddIcon from '@mui/icons-material/Add';
import { Button, Input } from '@mui/material';


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
        <Input type="text" variant="standard" inputRef={inputRef}/>
        <Button variant="contained" type='submit' color="primary" aria-label="add" size="small">
        <AddIcon />
        </Button>
        </form>
    )
}

export default TodoForm;