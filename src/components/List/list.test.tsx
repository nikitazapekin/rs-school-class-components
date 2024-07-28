 


 
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import List from './index.tsx';
import * as reduxHooks from 'react-redux';
import { render } from '@testing-library/react';

jest.mock('react-redux');
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: jest.fn(),
}));

const mockStore = configureStore([]);

const initialState = {
	params: { offset: 0, query: '' },
	users: [],
	isLoading: false,
};
const store = mockStore(initialState);

describe('List Component', () => {
	it('renders correctly', () => {
		const mockDispatchFn = jest.fn();
		jest.spyOn(reduxHooks, 'useDispatch').mockReturnValue(mockDispatchFn);
		jest.spyOn(reduxHooks, 'useSelector').mockImplementation((selector) => selector(initialState));

		const component = render(
			<Provider store={store}>
				<MemoryRouter>
					<List />
				</MemoryRouter>
			</Provider>,
		);

		expect(component).toMatchSnapshot();
	});
});
 