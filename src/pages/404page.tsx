 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const NotFoundPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (window.location.pathname === '/') {
			navigate('/main');
		}
	}, []);
	return (
		<>
 
		</>
	);
};

export default NotFoundPage;
