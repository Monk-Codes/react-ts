import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todo-context";

const NewTodo: React.FC = () => {
 const todosCtx = useContext(TodosContext);
 const todoRef = useRef<HTMLInputElement>(null);
 // const todo
 const submitHandler = (e: React.FormEvent) => {
  e.preventDefault();
  // TODO
  const enteredText = todoRef.current!.value;
  if (enteredText.trim().length === 0) {
   return;
  }
  todosCtx.addTodo(enteredText);
  todoRef.current!.value = "";
  todoRef.current!.focus();
 };
 // submit
 return (
  <form onSubmit={submitHandler} className={classes.form}>
   <label htmlFor="text">Todo</label>
   <input type="text" name="text" id="text" ref={todoRef} />
   <button>Add todo</button>
   <label>
    Double Click to <strong>Remove</strong>
   </label>
  </form>
 );
};
export default NewTodo;
