import React from 'react';
import Navbar from '../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Footer from '@/components/footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: 'pink', display: 'flex', minHeight: '100vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {/* Content Section */}
        <div style={{ display: 'flex', width: '80%', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ flex: 1, padding: '20px' }}>
            <h1 style={{ color: 'white', fontSize: '32px', marginBottom: '20px' }}>Welcome to our Website</h1>
            <p style={{ color: 'white', fontSize: '18px', lineHeight: '1.6' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec fringilla nisl. Vestibulum a ultrices dui. Cras a dapibus massa. Donec lacinia
              ultricies vestibulum. Duis interdum viverra purus, a tincidunt eros tincidunt ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec fringilla nisl. Vestibulum a ultrices dui. Cras a dapibus massa. Donec lacinia
              ultricies vestibulum. Duis interdum viverra purus, a tincidunt eros tincidunt ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec fringilla nisl. Vestibulum a ultrices dui. Cras a dapibus massa. Donec lacinia
              ultricies vestibulum. Duis interdum viverra purus, a tincidunt eros tincidunt ac.
            </p>
            <button style={{ marginTop: '20px', backgroundColor: 'white', color: 'pink', border: 'none', padding: '10px 20px', borderRadius: '5px', fontSize: '18px', cursor: 'pointer' }}>Learn More</button>
          </div>
          <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
            <div
              style={{
                position: 'relative',
                display: 'inline-block',
                overflow: 'hidden',
              }}
            >
              <img
                src="/dresses1.png"
                alt="Image"
                style={{ width: '100%', height: 'auto', transition: 'transform 0.3s ease-in-out', borderRadius: '10px' }}
                className="normal-image"
              />
              
            </div>
           
          </div>
          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;
