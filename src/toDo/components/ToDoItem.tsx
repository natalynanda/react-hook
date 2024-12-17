import { useContext } from "react";
import { ToDo } from "../interfaces/interfaces"
import { ToDoContext } from "../context/ToDoContext";

interface ToDoItemProps {
    todo: ToDo;
}
export const ToDoItem = ({ todo }: ToDoItemProps) => {
    const { toggleTodo } = useContext(ToDoContext);

    const handleDoubleClick = () => {
        console.log('double clicked', todo.task);
        toggleTodo(todo.id);
    }
  return (
    <li style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : 'none'
    }} onDoubleClick={handleDoubleClick}>
        {todo.task}
    </li>
  )
}
