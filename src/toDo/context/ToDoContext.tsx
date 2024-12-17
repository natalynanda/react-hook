import { createContext } from "react";
import { ToDoState } from "../interfaces/interfaces";

export type ToDoContextProps = {
    todoState: ToDoState;
    toggleTodo: (id: string) => void;
};

export const ToDoContext = createContext<ToDoContextProps>({} as ToDoContextProps);