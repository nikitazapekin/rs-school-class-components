import { Outlet } from 'react-router-dom';
import App from '../App';
const MainPage = () => {
	return (
		<>
			<App />
			<Outlet />
		</>
	);
};

export default MainPage;
