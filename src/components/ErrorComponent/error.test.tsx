import ErrorComponent from '.';
import { render, fireEvent } from '@testing-library/react';

describe('ErrorComponent', () => {
  it('matches snapshot initially', () => {
    const component = render(<ErrorComponent />);
    expect(component).toMatchSnapshot();
  });

  it('throws an error when the button is clicked once', () => {
    const { getByTestId } = render(<ErrorComponent />);
    expect(() => {
      fireEvent.click(getByTestId('throw__error'));
    }).toThrow('I crashed!!');
  });

  it('renders without crashing on initial render', () => {
    const component = render(<ErrorComponent />);
    expect(component.container).toBeInTheDocument();
  }); 
});

