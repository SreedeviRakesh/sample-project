import React, { useRef, useState } from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {

    const [editedTitle, setEditedTitle] = useState(props.title)
    const editedTitleRef = useRef()
    console.log(props.title)


    const submitHandler = (event) =>{
        event.preventDefault()        
        // setEditedTitle(editedTitleRef.current.value)
        // props.onNewTitle(editedTitle)
        const newTitle = editedTitleRef.current.value
        console.log(newTitle)
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
                    <button onClick={props.onClose}>Cancel</button>                    
                </footer>
        </form>       
        </React.Fragment>
    )
}

export default Modal;