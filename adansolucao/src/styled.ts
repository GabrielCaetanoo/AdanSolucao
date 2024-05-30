import styled, { createGlobalStyle } from "styled-components";
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
`;

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

export const Logo = styled.div`
  font-size: 1.5em;
  white-space: nowrap;
`;

export const Menu = styled.nav`
  display: flex;
  gap: 15px;
  overflow-x: auto;
`;

export const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const ItemListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
`;

export const ItemContainer = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  width: 200px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ItemName = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

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