import classes from './TodoItems.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions, taskActions } from '../store/index';
import Modal from './Modal';

const TodoItems = (props) => {

    const [isDone, setIsDone] = useState(false)
    // const [item, setItem] = useState('')
    const showModal = useSelector(state => state.modal.showModal)
    // const todoItems = useSelector(state => state.task.todoItems)

    const id = props.id;
    // console.log(id)
    
    const dispatch = useDispatch();

    const checkHandler =() => {
        setIsDone(prevState => !prevState)
    }

    const editHandler = () =>{
        dispatch(modalActions.openModal())
        // const todoItem = todoItems.find(item => item.id === id)
        // console.log(todoItem)
        // setItem(todoItem)
      }

    const deleteHandler = () =>{
        dispatch(taskActions.deleteTask(id))
        // console.log(id)
      }

    
    console.log(isDone)
    return (
        <>
        <li className={classes.list}>
            {props.title}
            <div className={classes.button}>
            <button style={isDone ? {backgroundColor:'rgb(172, 118, 223)', color: 'white'} : {}} onClick={checkHandler}>Done</button>
            <button onClick={editHandler}>Edit</button>
            <button onClick={deleteHandler}>Delete</button>
            {showModal && <Modal id={props.id} title={props.title}/>}
            {/* {showModal && <Modal id={item.id} title={item.title}/>} */}
            </div>
        </li>
        
        </>
    )
}

export default TodoItems;