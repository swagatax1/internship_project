import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSadTear } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div style={{  backgroundColor: 'pink', padding: '100px' }}>
        
        <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <FontAwesomeIcon icon={faSadTear} size="10x" style={{ marginBottom: '20px' }} />
          <p style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>Your cart is empty.</p>
          <p style={{ textAlign: 'center' }}>Start shopping and add some items to your cart!</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
