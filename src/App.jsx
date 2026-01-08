import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Tarefas from "./Pages/Tarefas";
import Produtos from "./Pages/Produtos";

function App(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </div>
  )
}

export default App