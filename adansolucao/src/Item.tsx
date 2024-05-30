import React from 'react';
import { ItemContainer, ItemName, ItemPrice } from '../src/styled';

type ItemProps = {
    item: {
      id: number;
      name: string;
      price: number;
    };
    addToCart: (item: { id: number; name: string; price: number }) => void;
  };
  
  const Item: React.FC<ItemProps> = ({ item, addToCart }) => {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(item.price);
  
    return (
      <ItemContainer>
        <ItemName>{item.name}</ItemName>
        <ItemPrice>{formattedPrice}</ItemPrice>
        <button onClick={() => addToCart(item)}>Comprar</button>
      </ItemContainer>
    );
  };
  
  export default Item;