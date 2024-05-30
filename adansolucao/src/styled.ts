import styled, { createGlobalStyle } from "styled-components";
import { Link } from 'react-router-dom';
import backgroundImage from '../src/assets/images/background.jpg';

//Style Global para modificar o fundo do site
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: rgba(30,30,30);
  }
`;
//Aqui é usado pra modificar a Header do site o topo
export const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  nav {
    display: flex;
    gap: 10px;
  }

  button {
    padding: 10px;
    background: #ccc;
    color: #000;
    border: none;
    cursor: pointer;
  }
`;
//Aqui é os itens que contem dentro do Header
export const NavLinkStyled = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 10px;
  background: #444;
  border-radius: 5px;

  &:hover {
    background: #666;
  }
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

// Container principal da página
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; 
`;

// Container para a lista de itens
export const ItemListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
`;

// Container para o título dos produtos
export const TitleContainer = styled.div`
  background-color: white; 
  padding: 20px; 
  margin-top: 20px; 
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  margin-bottom: 20px; 
`;

// Título dos produtos
export const Title = styled.h2`
  color: black; 
  margin: 0; 
  text-align: center; 
`;

// Container para cada item
export const ItemContainer = styled.div`
  border: 1px solid #ddd; 
  padding: 20px; 
  border-radius: 5px; 
  width: 200px; 
  text-align: center;
  background-color: white; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
`;

// Nome do item
export const ItemName = styled.h2`
  font-size: 1.2em; 
  margin-bottom: 10px;
`;

// Preço do item
export const ItemPrice = styled.p`
  font-size: 1em; 
  color: #333; 
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.5);
  padding: 20px;
  overflow-y: auto;
  z-index: 1000;
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CartTotal = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const CheckoutButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background: #000;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  padding: 5px;
  background: red;
  color: #fff;
  border: none;
  cursor: pointer;
`;

export const MinimizeButton = styled.button`
  padding: 5px;
  background: #ccc;
  color: #000;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const CheckoutContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  border-radius: 10px; 
`;

export const PaymentOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const PaymentButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    background-color: #0056b3;
  }
`;

//HOME DO SITE

export const HomeContainer = styled.div`
  position: relative; /* Tornar o posicionamento relativo para que o z-index funcione */
  text-align: center;
  padding: 50px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  margin-top: 30px;
  border: 2px solid #ccc; /* Adicione uma borda de 2px sólida com a cor cinza */
  border-radius: 10px; /* Adicione uma borda arredondada com raio de 10px */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Adicione uma sombra sutil */
`;

export const TitleHome = styled.h1`
  font-size: 2.5em;
  color: white;
  margin-bottom: 20px;
  position: relative; /* Tornar o posicionamento relativo */
  z-index: 1; /* Garantir que o título fique na frente do background */
`;

export const Subtitle = styled.p`
  font-size: 1.2em;
  color: white;
  margin-bottom: 15px;
  position: relative; /* Tornar o posicionamento relativo */
  z-index: 1; /* Garantir que o subtítulo fique na frente do background */
`;

export const HighlightSection = styled.div`
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Adiciona uma sombra suave */
  margin: 20px 0; /* Adiciona margem ao redor do container */
`;

export const HighlightTitle = styled.h2`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

export const HighlightItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 0 20px;
  display: inline-block;
`;

export const HighlightImage = styled.img`
  max-width: 200px;
  margin-bottom: 10px;
`;

export const HighlightName = styled.h3`
  font-size: 1.5em;
  color: #333;
`;

export const HighlightDescription = styled.p`
  font-size: 1em;
  color: #666;
`;