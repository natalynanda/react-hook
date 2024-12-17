import { Counter } from "./components/Counter";
import { CounterReducer } from "./components/CounterReducer";
import { Form } from "./components/Form";
import { MainTimer } from "./components/MainTimer";
import { User } from "./components/User";
import { ToDo } from "./toDo/components/ToDo";

function App() {
  return (
    <div className="App">
      <h1>React + Typescript</h1>
      <hr />
      <Counter />
      <User />
      <MainTimer />
      <h2>UseReducer</h2>
      <CounterReducer />

      <h2>Custom Hooks</h2>
      <Form />

      <ToDo />
    </div>
  );
}

export default App;
