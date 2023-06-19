import React from 'react';
import Navbar from '../components/navbar';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: 'pink', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ padding: '40px', borderRadius: '5px', backgroundColor: 'white', width: '400px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Login</h2>
          <form>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" style={{ width: '100%', padding: '10px' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" style={{ width: '100%', padding: '10px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <button style={{ backgroundColor: 'pink', color: 'white', border: 'none', padding: '12px', width: '45%', borderRadius: '5px' }}>Login</button>
              <a href="#" style={{ color: 'blue', textDecoration: 'underline', fontSize: '16px' }}>Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
