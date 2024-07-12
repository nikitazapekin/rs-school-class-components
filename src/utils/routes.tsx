import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HOMEPAGE_ROUTE, NOT_FOUND_ROUTE } from './consts';
import MainPage from '../pages/main';
import NotFoundPage from '../pages/404page';

const publicRoutes = [
	{
		path: HOMEPAGE_ROUTE,
		Component: MainPage,
	},
	{
		path: NOT_FOUND_ROUTE,
		Component: NotFoundPage,
	},
];

const AppRoutes = (): JSX.Element => {
	return (
		<Router>
			<Routes>
				<Route path={HOMEPAGE_ROUTE} element={<MainPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
};

export default AppRoutes;

/*import { Route, Routes, Navigate, Router } from 'react-router-dom';

import {
	HOMEPAGE_ROUTE,
	NOT_FOUND_ROUTE


} from './consts';

import MainPage from '../pages/main';
import NotFoundPage from '../pages/404page';
const publicRoutes = [
	{
		path: HOMEPAGE_ROUTE,
		Component: MainPage,
	},
	{
		path: NOT_FOUND_ROUTE,
		Component: NotFoundPage
	}
];
const AppRoutes = (): JSX.Element => {
	return (
		<Router>

			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route
					path='/*'
					element={
						<>
							<Routes>
								<Route path='/not-found' element={<NotFoundPage />} />

							</Routes>
						</>
					}
				/>
			</Routes>
		</Router>
	)
};
export default AppRoutes;
*/
/* 
<Routes>
{publicRoutes.map(({ path, Component }) => (
	<Route key={path} path={path} element={<Component />} />
))}

<Route path="*" element={<Navigate replace to={NOT_FOUND_ROUTE} />} />
</Routes>
*/
