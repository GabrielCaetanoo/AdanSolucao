import React from 'react';
import { CheckoutContainer, PaymentOption, PaymentButton } from '../src/styled';
import { useNavigate } from 'react-router-dom';

type CheckoutProps = {
  cartItems: { id: number; name: string; price: number }[];
};

const Checkout: React.FC<CheckoutProps> = ({ cartItems }) => {
  const navigate = useNavigate();

  const handlePayment = (method: string) => {
    alert(`Você selecionou ${method} como o seu pagamento.`);
     // O processo de pagamento deve ser implementado aqui. 
     //Após a conclusão do pagamento, é recomendável redirecionar o usuário ou exibir uma página de confirmação.
    navigate('/');
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(total);

  return (
    <CheckoutContainer>
      <h2>Selecione o metodo de Pagamento:</h2>
      <p>Total: {formattedTotal}</p>
      <PaymentOption>
        <PaymentButton onClick={() => handlePayment('Cartão de Credito')}>Cartão de Credito</PaymentButton>
        <PaymentButton onClick={() => handlePayment('PayPal')}>PayPal</PaymentButton>
        <PaymentButton onClick={() => handlePayment('Pix')}>Pix</PaymentButton>
      </PaymentOption>
    </CheckoutContainer>
  );
};

export default Checkout;