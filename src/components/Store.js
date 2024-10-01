import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; // Importe o hook useNavigate
import "../styles/Store.css";

function Store() {
  const { storeId } = useParams(); // Obtém o parâmetro storeId da URL
  const navigate = useNavigate(); // Use o hook useNavigate para navegação entre rotas

  // Dados fictícios da lista de produtos da loja
  const products = [
    {
      id: 1,
      name: "Produto 1",
      description: "Descrição do Produto 1."
    },
    {
      id: 2,
      name: "Produto 2",
      description: "Descrição do Produto 2."
    },
    {
      id: 3,
      name: "Produto 3",
      description: "Descrição do Produto 3."
    }
  ];

  // Filtra os produtos para exibir apenas os da loja específica com base no storeId
  const filteredProducts = products.filter(
    (product) => product.id === parseInt(storeId, 10) // Converte o storeId para número
  );

  const handleBackToHome = () => {
    // Use navigate para voltar para a página inicial (URL '/')
    navigate("/");
  };

  return (
    <div className="store-container">
      <h2>Produtos da Loja {storeId}:</h2>
      <ul className="product-list">
        {filteredProducts.map((product) => (
          <li className="product-item" key={product.id}>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            {/* Cria um link para o detalhe do produto com base no ID */}
            <Link to={`/product/${product.id}`} className="store-link">
              Ver detalhes
            </Link>
          </li>
        ))}
      </ul>
      {/* Adicione um botão para voltar para a página inicial */}
      <button onClick={handleBackToHome} className="back-button">
        Voltar para a página inicial
      </button>
    </div>
  );
}

export default Store;
