import TodoList from "../Components/TodoList";
import Menu from "./Menu";

function Tarefas(){
    return(
        <div>
            <h1>Lista de Tarefas:</h1>
            <TodoList />
            <Menu />
        </div>
    )
}

export default Tarefas