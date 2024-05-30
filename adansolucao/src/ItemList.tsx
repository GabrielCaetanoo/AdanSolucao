import React from 'react';
import { ItemListContainer } from '../src/styled';
import Item from './Item';

type ItemListProps = {
    addToCart: (item: { id: number; name: string; price: number }) => void;
  };
  
  const items = [
    { id: 1, name: 'Item 1', price: 50 },
    { id: 2, name: 'Item 2', price: 30 },
    { id: 3, name: 'Item 3', price: 20 },
  ];
  
  const ItemList: React.FC<ItemListProps> = ({ addToCart }) => {
    return (
      <ItemListContainer>
        <h2>Items</h2>
        {items.map(item => (
          <Item key={item.id} item={item} addToCart={addToCart} />
        ))}
      </ItemListContainer>
    );
  };
  
  export default ItemList;