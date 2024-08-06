import { render } from '@testing-library/react';
import Not from './index';  
import NotLayout from '../../components/not';

describe('Not Component', () => {
  it('renders without crashing', () => {
    render(<Not />);
  });

  it('has the correct layout assigned', () => {
    expect(Not.Layout).toBe(NotLayout);
  });
});
