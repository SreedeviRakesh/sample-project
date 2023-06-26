import classes from './TodoItems.module.css';
import { useState } from 'react';

const TodoItems = (props) => {

    const [isDone, setIsDone] = useState(false)

    const checkHandler =() => {
        setIsDone(prevState => !prevState)
    }

    
    console.log(isDone)
    return (
        <>
        <li className={classes.list}>
            {props.newTitle ? props.newTitle : props.title}
            <div className={classes.button}>
            <button style={isDone ? {backgroundColor:'black', color: 'white'} : {}} onClick={checkHandler}>Done</button>
            <button onClick={props.onEdit}>Edit</button>
            </div>
        </li>
        
        </>
    )
}

export default TodoItems;