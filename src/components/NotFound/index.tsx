import './index.scss';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/main');
	};
	return (
		<div className="not">
			<p className="not__title">404</p>
			<p className="not__text">Page was not found</p>
			<button className="not__btn" onClick={handleClick}>
				Back to homepage
			</button>
		</div>
	);
};

export default NotFound;
