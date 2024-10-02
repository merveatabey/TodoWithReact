import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../css/Todo.css';
import { FaCheck } from "react-icons/fa";

function Todo({todo, onRemoveTodos, onUpdateTodos}) {

    const{id, content} = todo;      //object destructuring kullanıyoruz todo.content veya todo.id yerine content ve id kullanabilmek için
    const[editable, setEditable] = useState(false);
    const[newTodo, setNewTodo] = useState(content);
   
    const removeTodo = () =>{
        onRemoveTodos(id);
    }
    
    const updateTodo = () =>{
        const request = {
            id : id,
            content : newTodo
        }
        onUpdateTodos(request);
        setEditable(false);
    }
 
    return (
        <div className = 'todo'>
            <div className="todo-area">
                {
                    editable ? <input className="todo-input" type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} style={{width : '380px'}}/> : content
                }
            </div>
            <div>
                <IoIosRemoveCircle className="todo-icons" onClick={removeTodo}/>
                {
                    editable ? <FaCheck className="todo-icons" style={{padding : '0px 5px' }} onClick={updateTodo}/> 
                             : <FaEdit className="todo-icons" style={{padding : '0px 0px 0px 10px'}} onClick={() => setEditable(true)}/> 
                }
                
            </div>
        </div>
    )
}

export default Todo;