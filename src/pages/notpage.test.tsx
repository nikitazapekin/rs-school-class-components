import { render } from '@testing-library/react';
import ErrorPage from './404';
import NotLayout from '../components/not';
 

describe('Not Component', () => {
  it('renders without crashing', () => {
    render(<ErrorPage />);
  });

  it('has the correct layout assigned', () => {
    expect(ErrorPage.Layout).toBe(NotLayout);
  });
});
