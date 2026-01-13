import { useState } from 'react';
import TodoItem from "./TodoItem"

function TodoList() {
  const [todos, setTodos] = useState([]) //state para array de tarefas
  const [inputTodo, setInputTodo] = useState("") //state para o input

  function addTodo(){ //função dentro da propria função TodoList
    if (inputTodo.trim() === "") { //verifica se tá vazio
      alert("Por favor, insira uma tarefa válida.");
      return;
    }

    setTodos([
      ...todos,
      {text:inputTodo, done: false} //texto digitado e estado inicial da tarefa (não concluída)
      //agora cada tarefa é um objeto, não mais uma string
    ]);

    setInputTodo("") //limpa o input  
  
  }

  function toggleTodo(index){
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  return (
    <div>
      <input type="text" value ={inputTodo} onChange={(e)=>setInputTodo(e.target.value)}/> 

      <button 
      //ao invés de fazer onClick = {()=> setTodos([...todos, inputTodo])} cria-se a função addTodo para deixar o código mais clean
      onClick={addTodo}>Adicionar
      </button>
      
      <ul>
        {todos.map((tarefa, index) => (
          //cada tarefa da array vira um item da lista, cada item precisa de uma key unica, map também retorna um NOVO ARRAY (importante)
          <TodoItem 
            key={index}
            todo={tarefa}
            onToggle={()=>toggleTodo(index)} //Se clicar na tarefa, chama a função toggleTodo com o index da tarefa 
          />
        ))}
      </ul>
    </div>
  ); 
}

export default TodoList
