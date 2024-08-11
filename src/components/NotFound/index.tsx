import { useNavigate } from "@remix-run/react";
import React from 'react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const handleBackToHomepage = () => {
    navigate('/');
  };
  return (
    <div style={styles.not} data-testid="not-found">
      <p style={styles.title}>404</p>
      <p style={styles.text}>Page was not found</p>
      <button onClick={handleBackToHomepage} style={styles.button}>
        Back to homepage
      </button>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  not: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
  },
  title: {
    fontSize: '106px',
  },
  text: {
    fontSize: '56px',
  },
  button: {
    marginTop: '30px',
    padding: '20px',
    cursor: 'pointer',
    borderRadius: '20px',
    fontSize: '30px',
    transition: 'background-color 1s, color 1s',
    backgroundColor: 'transparent',
    color: '#000',
    border: 'none',
    textDecoration: 'none',
  },
  buttonHover: {
    backgroundColor: 'rgb(90, 90, 190)',
    color: '#fff',
  },
};

export default NotFound;
