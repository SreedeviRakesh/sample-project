import TodoItems from "./TodoItems";

const TodoList = (props) => {
    return (
        <ul>
            {props.todoItems.map((todoItem) => <TodoItems key={todoItem.id} id={todoItem.id} title={todoItem.title} onEdit={props.onEdit} newTitle={props.newTitle}/>)}
        </ul>
    )
}

export default TodoList;