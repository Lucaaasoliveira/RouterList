import Menu from "./Menu";
import { produtos } from "../Data/produtos";
import ProductCard from "../Components/ProductCard";

function Produtos(){
    return(
        <div>
            <h1>Catálogo de Produtos:</h1>
            <ul>
                {produtos.map(produto => (
                    <ProductCard
                        key={produto.id}
                        nome={produto.nome}
                        descricao={produto.descricao}
                        imagem={produto.imagem}
                    />
                ))}
            </ul>
            <Menu />
        </div>
    )
}

export default Produtos