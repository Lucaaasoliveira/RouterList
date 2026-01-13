function ProductCard({ nome, descricao, imagem }) {
  return (
    <div>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <img src={imagem} alt={nome} />
    </div>
  );
}

export default ProductCard;
