import React, { useRef } from 'react';
import classes from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { modalActions, taskActions } from '../store/index';

const Modal = (props) => {
    // console.log(props.task)

    const editedTitleRef = useRef()

    const dispatch = useDispatch();

    const submitHandler = (event) =>{
        event.preventDefault()    
        const newTitle = editedTitleRef.current.value
        console.log(newTitle)
        dispatch(taskActions.addTask({title: newTitle, id: props.task.id }))
        dispatch(modalActions.closeModal())
    }

    const closeModalHandler =() => {
        dispatch(modalActions.closeModal())
    }
 

    return (
        <React.Fragment>
        <div className={classes.backdrop}/>
        <form className={classes.modal} onSubmit={submitHandler}>           
                <header className={classes.header}>
                    <h2>Please edit your title.</h2>
                </header>                
                <div className={classes.content}>
                    <input type='text' placeholder='enter your title' defaultValue={props.task.title} ref={editedTitleRef}/>
                </div>
                <footer className={classes.actions}>
                    <button>Okay</button> 
                    <button onClick={closeModalHandler}>Close</button>                    
                </footer>
        </form>       
        </React.Fragment>
    )
}

export default Modal;