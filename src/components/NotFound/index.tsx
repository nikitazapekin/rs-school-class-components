 
import { useNavigate, useLocation } from "@remix-run/react";
const style = {
  color: 'red',
  fontSize: '20px',
};

const NotFound = () => {
  const navigate = useNavigate();
  

  const handleBackToHomepage = () => {
    navigate('/');
  };
  
  return (
    <div  className="not" data-testid="not-found">
      <p  style={style}  className="not__title">404</p>
      <p className="not__text">Page was not found</p>
      <button onClick={handleBackToHomepage} className="not__button">
        Back to homepage
      </button>


    </div>
  );
};

export default NotFound;
 