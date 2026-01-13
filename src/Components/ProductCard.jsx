import "./productCard.css";

function ProductCard({ nome, descricao, imagem }) {
  return (
    <div className="product-card">
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>{descricao}</p>
    </div>
  );
}

export default ProductCard;
