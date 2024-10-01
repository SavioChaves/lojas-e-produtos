import React from "react";
import { Link } from "react-router-dom"; // Importa o componente Link do React Router
import "../styles/Home.css"; // Importa o estilo CSS para este componente

function Home() {
  // Dados fictícios da lista de lojas
  const stores = [
    {
      id: 1,
      name: "Loja A",
      description: "Uma loja incrível com produtos incríveis."
    },
    {
      id: 2,
      name: "Loja B",
      description: "Tudo o que você precisa em um só lugar."
    },
    {
      id: 3,
      name: "Loja C",
      description: "Qualidade e variedade em nossos produtos."
    }
  ];

  return (
    <div>
      <h2>Escolha uma loja:</h2>
      <ul className="store-list">
        {stores.map((store) => (
          <li className="store-item" key={store.id}>
            <h3 className="store-name">{store.name}</h3>
            <p className="store-description">{store.description}</p>
            <Link to={`/store/${store.id}`} className="store-link">
              Ver produtos
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
