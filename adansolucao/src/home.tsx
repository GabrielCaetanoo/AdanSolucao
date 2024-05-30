import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from '../src/assets/images/background.avif'; // Importe uma imagem de fundo ou destaque


const HomeContainer = styled.div`
  position: relative; /* Tornar o posicionamento relativo para que o z-index funcione */
  text-align: center;
  padding: 50px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: black;
  margin-bottom: 20px;
  position: relative; /* Tornar o posicionamento relativo */
  z-index: 1; /* Garantir que o título fique na frente do background */
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: grey;
  margin-bottom: 40px;
  position: relative; /* Tornar o posicionamento relativo */
  z-index: 1; /* Garantir que o subtítulo fique na frente do background */
`;

const HighlightSection = styled.div`
  background-color: #f9f9f9;
  padding: 50px 0;
`;

const HighlightTitle = styled.h2`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

const HighlightItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 0 20px;
  display: inline-block;
`;

const HighlightImage = styled.img`
  max-width: 200px;
  margin-bottom: 10px;
`;

const HighlightName = styled.h3`
  font-size: 1.5em;
  color: #333;
`;

const HighlightDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

const Home: React.FC = () => (
  <div>
    <HomeContainer>
      <Title>Bem-vindo à Loja</Title>
      <Subtitle>Clique para ver os Produtos</Subtitle>
      <Link to="/products">
        <button>Explorar Produtos</button>
      </Link>
    </HomeContainer>
    <HighlightSection>
      <HighlightTitle>Destaques</HighlightTitle>
      <HighlightItem>
        <HighlightImage src="produto1.jpg" alt="Produto 1" />
        <HighlightName>Produto 1</HighlightName>
        <HighlightDescription>
          Descrição do Produto 1 e suas características.
        </HighlightDescription>
      </HighlightItem>
      <HighlightItem>
        <HighlightImage src="produto2.jpg" alt="Produto 2" />
        <HighlightName>Produto 2</HighlightName>
        <HighlightDescription>
          Descrição do Produto 2 e suas características.
        </HighlightDescription>
      </HighlightItem>
      <HighlightItem>
        <HighlightImage src="produto3.jpg" alt="Produto 3" />
        <HighlightName>Produto 3</HighlightName>
        <HighlightDescription>
          Descrição do Produto 3 e suas características.
        </HighlightDescription>
      </HighlightItem>
    </HighlightSection>
  </div>
);

export default Home;