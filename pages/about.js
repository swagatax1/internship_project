import React from 'react';
import Navbar from '../components/navbar';

const aboutPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: 'pink', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '800px', padding: '40px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>About Us</h1>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
              <img src="/sweetheart.png" alt="About" style={{ width: '200px', height: '200px', borderRadius: '50%', marginBottom: '20px' }} />
              <img src="/about2.png" alt="About" style={{ width: '200px', height: '200px', borderRadius: '50%', marginBottom: '20px' }} />
              <img src="/about3.jpg" alt="About" style={{ width: '200px', height: '200px', borderRadius: '50%', marginBottom: '20px' }} />
            </div>
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel metus ut arcu interdum tristique sed sed nunc. Phasellus iaculis, massa nec accumsan nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.
                fringilla, nisl lacus malesuada ligula, nec fringilla est sem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel metus ut arcu interdum tristique sed sed nunc. Phasellus iaculis, massa nec accumsan nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.
                fringilla, nisl lacus malesuada ligula, nec fringilla est senon dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.nec fringilla est sem non dolor.
              </p>
              <p style={{ fontSize: '18px', lineHeight: '1.6', textAlign: 'justify' }}>
                Suspendisse potenti. Nunc nec massa et tellus placerat gravida. Mauris pharetra volutpat odio, vitae tincidunt justo dignissim vitae.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p href="/contact" style={{ fontSize: '18px', color: '#ff6b6b', textDecoration: 'underline' }}>Contact us</p> to learn more.
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutPage;
