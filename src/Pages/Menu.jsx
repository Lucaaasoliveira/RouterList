import { Link } from "react-router-dom";


function Menu(){
    return(
        <div>
            <ul>
                <li><Link to="/">Ficar ou voltar a página principal</Link>&nbsp;&nbsp;</li>
                <li><Link to="/tarefas">Ir para a página de tarefas</Link>&nbsp;&nbsp;</li>
                <li><Link to="/produtos">Ir para o catálogo de produtos</Link>&nbsp;&nbsp;</li>
            </ul>
        </div>
    )
}

export default Menu