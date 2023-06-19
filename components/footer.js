import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', padding: '50px', color: 'white', textAlign: 'center' }}>
    &copy; 2023 Your Website. All rights reserved.
    <div style={{ marginTop: '20px' }}>
      <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '10px', color: 'white', fontSize: '24px' }} />
      <FontAwesomeIcon icon={faTwitter} style={{ marginRight: '10px', color: 'white', fontSize: '24px' }} />
      <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '10px', color: 'white', fontSize: '24px' }} />
    </div>
  </footer>
  )
};

export default Footer;
