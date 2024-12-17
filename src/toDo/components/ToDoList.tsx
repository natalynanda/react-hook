import { ToDoItem } from "./ToDoItem";
import { useTodos } from "../hooks/useTodos";

export const ToDoList = () => {
    const { todos } = useTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
