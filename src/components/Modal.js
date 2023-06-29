import React, { useRef } from 'react';
import classes from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { modalActions, taskActions } from '../store/index';

const Modal = (props) => {

    const editedTitleRef = useRef()

    const dispatch = useDispatch();

    const submitHandler = (event) =>{
        event.preventDefault()    
        const newTitle = editedTitleRef.current.value
        console.log(newTitle)
        dispatch(taskActions.addTask({title: newTitle, id: props.id }))
        dispatch(modalActions.openModal())
    }

    const closeModalHandler =() => {
        dispatch(modalActions.openModal())
    }
 

    return (
        <React.Fragment>
        <div className={classes.backdrop}/>
        <form className={classes.modal} onSubmit={submitHandler}>           
                <header className={classes.header}>
                    <h2>Please edit your title.</h2>
                </header>                
                <div className={classes.content}>
                    <input type='text' defaultValue={props.title} ref={editedTitleRef}/>
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