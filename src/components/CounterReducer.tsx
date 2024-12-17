import { useReducer } from "react";

const initialState = { count: 0 };

type CounterActions =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "CUSTOM"; payload: number };

const counterReducer = (state: typeof initialState, action: CounterActions) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return initialState;
    case "CUSTOM":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

export const CounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <h2>CounterReducer: {state.count}</h2>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "CUSTOM", payload: 100 })}
      >
        +100
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </>
  );
};
