import React from 'react';
import { Link } from 'react-router-dom';
import {CartButton} from '../src/styled'
import { HomeContainer,
         TitleHome, 
         Subtitle, 
         HighlightSection, 
         HighlightTitle, 
         HighlightItem, 
         HighlightImage, 
         HighlightName, 
         HighlightDescription} from '../src/styled';




const Home: React.FC = () => (
  <div>
    <HomeContainer>
      <TitleHome>Bem-vindo à Loja</TitleHome>
      <Subtitle>Clique para ver os Produtos</Subtitle>
      <CartButton>
      <Link to="/produtos">
        <button>Explorar Produtos</button>
      </Link>
      </CartButton>
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