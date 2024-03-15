import React, { useState } from "react";
import Todo from "../components/todo";

//

type TodosContextObj = {
 items: Todo[];
 addTodo: (text: string) => void;
 removeTodo: (id: string) => void;
};
// @Component
export const TodosContext = React.createContext<TodosContextObj>({
 items: [],
 addTodo: () => {},
 removeTodo: (id: string) => {},
});
////////////////////////////////
const TodosProvider: React.FC<{ children: React.ReactNode }> = (props) => {
 // initialize
 const [todos, setTodos] = useState<Todo[]>([]);

 const addTodoHandler = (text: string) => {
  const newTodo = new Todo(text);
  setTodos((prevTodo) => {
   return prevTodo.concat(newTodo);
  });
 };

 const removeTodoHandler = (text: string) => {
  setTodos((prevTodo) => {
   return prevTodo.filter((todo) => todo.id !== text);
  });
 };

 const contextValue: TodosContextObj = {
  items: todos,
  addTodo: addTodoHandler,
  removeTodo: removeTodoHandler,
 };
 return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};
export default TodosProvider;
