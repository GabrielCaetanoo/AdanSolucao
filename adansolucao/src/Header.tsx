import React from 'react';
import { HeaderContainer, NavLinkStyled } from '../src/styled';

type HeaderProps = {
    toggleCart: () => void;
  };
  
  const Header: React.FC<HeaderProps> = ({ toggleCart }) => {
    return (
      <HeaderContainer>
        <nav>
          <NavLinkStyled to="/">Inicial</NavLinkStyled>
          <NavLinkStyled to="/produtos">Produtos</NavLinkStyled>
          <button onClick={toggleCart}>Carrinho</button>
        </nav>
      </HeaderContainer>
    );
  };
  
  export default Header;