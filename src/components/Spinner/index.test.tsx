import { render } from '@testing-library/react';

import Spinner from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Spinner', () => {
	it('renders correctly with loader element', () => {
		const { getByTestId } = render(
			<MemoryRouter>
				<Spinner />
			</MemoryRouter>,
		);

		const loaderElement = getByTestId('loader');
		expect(loaderElement).toBeInTheDocument();
		expect(loaderElement).toHaveClass('loader');
	});

	it('renders correctly with styles applied', () => {
		const { container } = render(<Spinner />);

		expect(container.firstChild).toHaveStyle(`
      width: 48px;
      height: 48px;
      border: 5px solid #fff;
      border-bottom-color: #7700ff;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: anim 0.8s linear infinite;
      margin: 0 auto;
      position: absolute;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
      left: 50%;
      display: flex;
      justify-content: center;
      z-index: 111111;
      align-items: center;
    `);
	});
});
