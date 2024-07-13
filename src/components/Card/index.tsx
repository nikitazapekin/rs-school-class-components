import { useNavigate } from 'react-router-dom';
import './index.scss';
import { CardProps } from './types.ts';

const Card = ({ avatar_url, login }: CardProps) => {
	const navigate = useNavigate();

	const handleCardClick = () => {
		const currentParams = new URLSearchParams(location.search);

		const currentUrl = `${window.location.pathname}?${currentParams.toString()}`;

		if (!currentUrl.includes('userdata')) {
			localStorage.setItem('lastUrl', currentUrl);
		}

		navigate(`/main/userdata?username=${login}`);
	};

	return (
		<div className="user__link" onClick={handleCardClick}>
			<div className="user">
				<img className="user__logo" src={avatar_url} alt="user" />
				{login}
			</div>
		</div>
	);
};

export default Card;
