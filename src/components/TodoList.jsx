import React from "react";
import Todo from "./Todo";

function TodoList({todos, onRemoveTodo, onUpdateTodo}){
    return(
        <div style={{width : '100%' , marginTop : '50px'}}>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo = {todo} onRemoveTodos = {onRemoveTodo} onUpdateTodos= {onUpdateTodo}/>           //almış olduğumuz todo'yu buraya props olarak geçiyoruz
                ))
            }
           
        </div>
    );
}
export default TodoList;