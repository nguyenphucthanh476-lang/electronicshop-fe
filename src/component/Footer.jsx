import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Youtube, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#1f2937', 
      color: '#d1d5db',
      paddingTop: '60px',
      marginTop: 'auto', 
      fontFamily: '"Inter", sans-serif',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      paddingBottom: '40px',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    title: {
      color: '#fff',
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    text: {
      fontSize: '14px',
      lineHeight: '1.6',
      color: '#9ca3af',
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    link: {
      textDecoration: 'none',
      color: '#d1d5db',
      fontSize: '14px',
      transition: 'color 0.2s',
      cursor: 'pointer',
    },
    socialIcons: {
      display: 'flex',
      gap: '15px',
    },
    socialIcon: {
      width: '36px',
      height: '36px',
      backgroundColor: '#374151',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
      transition: 'background 0.3s',
    },
    bottomBar: {
      borderTop: '1px solid #374151',
      padding: '20px 0',
      textAlign: 'center',
      fontSize: '14px',
      color: '#6b7280',
    },
    highlight: {
      color: '#ef4444', 
      fontWeight: 'bold',
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <div style={styles.column}>
          <h3 style={styles.title}>About Electronics Store</h3>
          <p style={styles.text}>
            The leading retailer of genuine phones, computers, and accessories. 
            We commit to the best market prices and a 1-to-1 exchange warranty.
          </p>
          <p style={styles.text}>
             Address: FPT Software, High Tech Park, District 9, HCMC
          </p>
        </div>

        <div style={styles.column}>
          <h3 style={styles.title}>Customer Support</h3>
          <ul style={styles.linkList}>
            <li><Link to="#" style={styles.link}>Online Buying Guide</Link></li>
            <li><Link to="#" style={styles.link}>Warranty Policy</Link></li>
            <li><Link to="#" style={styles.link}>Return Policy</Link></li>
            <li><Link to="#" style={styles.link}>Order Tracking</Link></li>
            <li><Link to="#" style={styles.link}>Feedback & Complaints</Link></li>
          </ul>
        </div>

        <div style={styles.column}>
          <h3 style={styles.title}>Support Hotline</h3>
          <div>
            <p style={{...styles.text, marginBottom: '5px'}}>Sales Hotline:</p>
            <p style={{fontSize: '20px', fontWeight: 'bold', color: '#fff', margin: 0}}>1800.1234</p>
            <p style={{fontSize: '12px', color: '#9ca3af'}}>(7:30 - 22:00)</p>
          </div>
          <div style={{marginTop: '15px'}}>
            <p style={{...styles.text, marginBottom: '5px'}}>Warranty Hotline:</p>
            <p style={{fontSize: '18px', fontWeight: 'bold', color: '#fff', margin: 0}}>1800.5678</p>
            <p style={{fontSize: '12px', color: '#9ca3af'}}>(8:00 - 21:00)</p>
          </div>
        </div>

        <div style={styles.column}>
          <h3 style={styles.title}>Connect With Us</h3>
          <div style={styles.socialIcons}>
            <a href="#" aria-label="Facebook" style={{...styles.socialIcon, background: '#1877f2'}}>
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="YouTube" style={{...styles.socialIcon, background: '#ff0000'}}>
              <Youtube size={18} />
            </a>
            <a href="#" aria-label="X / Twitter" style={{...styles.socialIcon, background: '#000000'}}>
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="Instagram" style={{...styles.socialIcon, background: '#E1306C'}}>
              <Instagram size={18} />
            </a>
          </div>
          <div style={{marginTop: '20px'}}>
            <h4 style={{fontSize: '14px', color: '#fff', marginBottom: '10px'}}>Payment Methods:</h4>
            <div style={{display: 'flex', gap: '10px'}}>
               <span style={{padding: '5px 10px', background: '#fff', borderRadius: '4px', color: '#000', fontSize: '12px', fontWeight: 'bold'}}>VISA</span>
               <span style={{padding: '5px 10px', background: '#fff', borderRadius: '4px', color: '#000', fontSize: '12px', fontWeight: 'bold'}}>MOMO</span>
               <span style={{padding: '5px 10px', background: '#fff', borderRadius: '4px', color: '#000', fontSize: '12px', fontWeight: 'bold'}}>COD</span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <p style={{margin: 0}}>
          © 2024 Copyright by <span style={styles.highlight}>Group 4 - FPTU</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;