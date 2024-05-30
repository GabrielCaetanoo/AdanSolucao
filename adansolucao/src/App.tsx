import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, GlobalStyle } from '../src/styled';
import Header from '../src/Header';
import ItemList from '../src/ItemList';
import Cart from '../src/Cart';
import Checkout from '../src/Checkout';
import Home from '../src/home';

//O estado isCartOpen no App.tsx controla a visibilidade do carrinho, e a função toggleCart é passada para o Header para ser chamada quando o botão do carrinho é clicado

type ProductsProps = {
  addToCart: (item: { id: number; name: string; price: number }) => void;
};

const Products: React.FC<ProductsProps> = ({ addToCart }) => (
  <div>
    <h1>Products</h1>
    <ItemList addToCart={addToCart} />
  </div>
);

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <GlobalStyle />
      <Header toggleCart={toggleCart} />
      <Container>
        {isCartOpen && <Cart items={cartItems} removeFromCart={removeFromCart} toggleCart={toggleCart} />}
        <Routes>
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;