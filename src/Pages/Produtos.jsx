import Menu from "./Menu";
import { produtos } from "../Data/produtos";
import ProductCard from "../Components/ProductCard";
import "./produtos.css";

function Produtos(){
    return(
        <div className = "products-page">
            <h1>Catálogo de Produtos</h1>
            <div className= "products-grid">
                    {produtos.map(produto => (
                        <ProductCard
                            key={produto.id}
                            nome={produto.nome}
                            descricao={produto.descricao}
                            imagem={produto.imagem}
                        />
                    ))}
            </div>
            <Menu />
        </div>
    )
}

export default Produtos