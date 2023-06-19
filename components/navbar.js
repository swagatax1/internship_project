import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'black', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
      <p style={{ color: 'white', fontWeight: 'bold', fontSize: '2rem' }}>logo</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ marginRight: '15px', color: 'white' }}>
          <Link href="/">
            <p style={{ color: 'white', textDecoration: 'none' }}>Home</p>
          </Link>
        </p>
        <p style={{ marginRight: '15px', color: 'white' }}>
          <Link href="/about">
            <p style={{ color: 'white', textDecoration: 'none' }}>About</p>
          </Link>
        </p>
        <p style={{ marginRight: '15px', color: 'white' }}>
          <Link href="/dresses">
            <p style={{ color: 'white', textDecoration: 'none' }}>Dresses</p>
          </Link>
        </p>
        <p style={{ marginRight: '15px', color: 'white' }}>
          <Link href="/accessories">
            <p style={{ color: 'white', textDecoration: 'none' }}>Accessories</p>
          </Link>
        </p>
        <p style={{ marginRight: '15px', color: 'white' }}>
          <Link href="/skincare">
            <p style={{ color: 'white', textDecoration: 'none' }}>Skincare</p>
          </Link>
        </p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <input type="text" placeholder="Search" style={{ marginRight: '80px', borderRadius: '20px', padding: '5px', width: '150px' }} />
          <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', right: '85px', top: '50%', transform: 'translateY(-50%)', color: 'black' }} />
        </div>
        <div style={{ marginRight: '15px' }}>
          <Link href="/Wishlist">
            <p style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faHeart} style={{ marginRight: '5px' }} />
              Wishlist
            </p>
          </Link>
        </div>
        <div style={{ marginLeft: '15px' }}>
          <Link href="/Cart">
            <p style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />
              Cart
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
