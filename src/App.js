import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import classes from './App.module.css'
import { useSelector } from 'react-redux';

function App() {
  
  const todoItems = useSelector(state => state.task.todoItems) 
  const itemsAvailable = todoItems.length > 0

  return (
    <>
    <h1>My To-do App</h1>
    <TodoForm />
    <div className={itemsAvailable ? classes.list : ''}> <TodoList /></div>
    </>    
  );
}

export default App;
