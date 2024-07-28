import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import MainPage from '../pages/main';
import NotFoundPage from '../pages/404page';
import UserData from '@/components/UserData';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
const AppRoutes = (): JSX.Element => {
	return (
		<ErrorBoundary>
			<Provider store={store}>
				<Router>
					<Routes>
						<Route path="/main" element={<MainPage />}>
							<Route path="userdata" element={<UserData />} />
							<Route path="*" element={<Outlet />} />
						</Route>
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Router>
			</Provider>
		</ErrorBoundary>
	);
};

export default AppRoutes;
