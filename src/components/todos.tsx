import React, { useContext } from "react";
import TodoItem from "./todoItem";
import classes from "./TodoItem.module.css";
import { TodosContext } from "../store/todo-context";

const Todos: React.FC = () => {
 const todosCtx = useContext(TodosContext);
 return (
  <ul className={classes.todos}>
   {todosCtx.items.map((item) => (
    <TodoItem key={item.id} text={item.text} removeTodo={todosCtx.removeTodo.bind(null, item.id)} />
   ))}
  </ul>
 );
};
export default Todos;
