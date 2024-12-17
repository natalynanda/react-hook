import { useContext } from "react"
import { ToDoContext } from "../context/ToDoContext";

export const useTodos = () => {
    const {todoState, toggleTodo} = useContext(ToDoContext);

    return {
        todos: todoState.toDos,
        toggleTodo,
        pending: todoState.toDos.filter(t => !t.completed).length,
    }
}