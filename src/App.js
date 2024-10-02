import { useState } from 'react';
import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';

function App() {

  const[todos, setTodos] = useState([]);   //eklenen işlerim 

  const createTodo = (newTodos) => {
    if(todos.some(todo => todo.content === newTodos.content))
    {
      alert('Bu işi daha önce eklediniz');
      return;
    }
    setTodos([...todos, newTodos]);    //önceki işler ile sonra eklenen işleri beraber tut
  }

  console.log(todos);

  const removeTodo = (todoId) =>{
    setTodos([...todos.filter((todo) => todo.id !== todoId)])
  }

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id !== newTodo.id)
       {
        return todo;
       }
       return newTodo;
    })
    setTodos([...updatedTodos])
  }
  //İşleri listelemek için todos state ine ihtiyacım var dolayısıyla TodoList componentime todos'u props olarak veriyorum
  return (
    <div className="App">
      <div style={{width : '500px', display : 'flex', flexDirection : 'column', alignItems : 'center', justifyContent : 'center'}}>
      <TodoCreate onCreateTodo = {createTodo}/>
      <TodoList todos = {todos} onRemoveTodo = {removeTodo} onUpdateTodo = {updateTodo}/>        
      </div>
    </div>
  );
}

export default App;
