import classes from './TodoItems.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions, taskActions } from '../store/index';
import Modal from './Modal';

const TodoItems = (props) => {

    const [isDone, setIsDone] = useState(false)
    const showModal = useSelector(state => state.modal.showModal)
    
    const todoItems = useSelector(state => state.task.todoItems) 
    const editedItem = useSelector(state => state.modal.editedItem) 

    const id = props.id;
    // console.log(id)
    
    const dispatch = useDispatch();

    const checkHandler =() => {
        setIsDone(prevState => !prevState)
    }

    const editHandler = (event) =>{        
        
        console.log(event.target.value)
        const taskId = event.target.value;
        const todoItem = todoItems.find(task => task.id === taskId)
        console.log(todoItem)
        dispatch(modalActions.openModal(todoItem));
        
      }

    const deleteHandler = () =>{
        dispatch(taskActions.deleteTask(id))
        // console.log(id)
      }
    
    return (
        <>
        <li className={classes.list}>
            {props.title}
            <div className={classes.button}>
            <button style={isDone ? {backgroundColor:'rgb(172, 118, 223)', color: 'white'} : {}} onClick={checkHandler}>Done</button>
            <button onClick={editHandler} value={props.id}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>            
            </div>
        </li>
        
        {showModal && <Modal task={editedItem}/>}
        </>
    )
}

export default TodoItems;