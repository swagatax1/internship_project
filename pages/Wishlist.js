import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';

const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: 'pink', padding: '150px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <FontAwesomeIcon icon={faHeart} size="8x" style={{ marginBottom: '20px' }} />
          <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>Your Wishlist</p>
          <p style={{ textAlign: 'center' }}>Start adding items to your wishlist!</p>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
