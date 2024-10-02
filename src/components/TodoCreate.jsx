import React, { useState } from "react";
import './../css/TodoCreate.css';

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');   //iş ekle kısmına girilen değeri alacak

    const createTodo = () => {
        if (!newTodo) return;            //bir iş girilmezse boş geç
        const request = {
            id: Math.floor(Math.random() * 9999999999),  //random bir id oluşturduk
            content: newTodo   //girilen işi gösteriyor
        }

        onCreateTodo(request);
        setNewTodo('');

    }
    return (
        <div className="todo-create">
            <input value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="todo-input"
                type="text"
                placeholder="Bir iş giriniz" />
            <button className="todo-button" onClick={createTodo}>İş Oluştur</button>
        </div>
    )
}

export default TodoCreate;