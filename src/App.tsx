import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/todos";
import TodosProvider from "./store/todo-context";

function App() {
 return (
  <TodosProvider>
   <NewTodo />
   <Todos />
  </TodosProvider>
 );
}

export default App;
