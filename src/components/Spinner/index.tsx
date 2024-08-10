import React from 'react';

const Spinner: React.FC = () => {
  const styles: React.CSSProperties = {
    width: '48px',
    height: '48px',
    border: '5px solid #fff',
    borderBottomColor: '#7700ff',
    borderRadius: '50%',
    display: 'inline-block',
    boxSizing: 'border-box',
    animation: 'spin 0.8s linear infinite',
    margin: '0 auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 111111111111111111,
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <span style={styles} data-testid="loader"></span>
    </>
  );
};

export default Spinner;


//import './index.scss';
/*
const Spinner = () => {
	return (
		<>
			<span className="loader" data-testid="loader"></span>
		</>
	);
};
export default Spinner;
*/