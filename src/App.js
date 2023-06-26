import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Modal from './components/Modal';

function App() {

  const [task, setTask] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')

  const addTodoTaskHandler = (todoTask) => {
      setTask((prevTask) => {
      const newTask = [...prevTask, {...todoTask}]
      return newTask;
      })
  }

  const editHandler = () =>{
    setShowModal(true)
  }

  const closeHandler = () => {
    setShowModal(false)
  }

  const newTitleHandler = (newTitle) => {
    setTitle(newTitle)
  }

  return (
    <>
    <h1>My To-do App</h1>
    <TodoForm onAdd={addTodoTaskHandler} />
    <TodoList todoItems={task} onEdit={editHandler} newTitle={title}/>
    {showModal && <Modal onClose={closeHandler} title={task.map(item => item.title)} onNewTitle={newTitleHandler}/>}
    </>    
  );
}

export default App;
