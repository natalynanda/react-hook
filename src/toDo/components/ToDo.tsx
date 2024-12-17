import { ToDoProvider } from "../context/ToDoProvider"
import { CounterTodo } from "./CounterTodo"
import { ToDoList } from "./ToDoList"

export const ToDo = () => {
  return (
    <ToDoProvider>
    <CounterTodo />
    <ToDoList/>   
    </ToDoProvider>
  )
}
