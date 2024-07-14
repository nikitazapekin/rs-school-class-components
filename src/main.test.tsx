import { render } from '@testing-library/react';
import AppRoutes from './utils/routes.tsx';
import { MemoryRouter } from 'react-router-dom';

describe('AppRoutes', () => {
	it('renders without crashing', () => {
		const root = document.createElement('div');
		root.id = 'root';
		document.body.appendChild(root);

		render(
			<MemoryRouter>
				<AppRoutes />
			</MemoryRouter>,
		);

		expect(document.getElementById('root')).toBeInTheDocument();
	});
});
