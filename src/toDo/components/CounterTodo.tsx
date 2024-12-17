import { useTodos } from "../hooks/useTodos";

export const CounterTodo = () => {
    const {pending} = useTodos();
  return (
    <h1>Todos: {pending}</h1>
  )
}
