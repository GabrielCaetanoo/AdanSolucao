import React from 'react';
import { CartContainer, CartItem, CartTotal, CheckoutButton, RemoveButton, MinimizeButton } from '../src/styled';
import { useNavigate } from 'react-router-dom';

type CartProps = {
    items: { id: number; name: string; price: number }[];
    removeFromCart: (id: number) => void;
    toggleCart: () => void;
  };
  
  const Cart: React.FC<CartProps> = ({ items, removeFromCart, toggleCart }) => {
    const navigate = useNavigate();
    
    const total = items.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <CartContainer>
        <MinimizeButton onClick={toggleCart}>Fechar</MinimizeButton>
        <h2>Carrinho de Compras</h2>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              {item.name} - R$ {item.price.toFixed(2)}
              <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
            </CartItem>
          ))}
        </ul>
        <CartTotal>Total: R$ {total.toFixed(2)}</CartTotal>
        <CheckoutButton onClick={() => navigate('/checkout')}>Finalizar Compra</CheckoutButton>
      </CartContainer>
    );
  };
  
  export default Cart;