 
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import NotFound from './index';

describe('NotFound Component', () => {
    test('renders correctly', () => {
        render(
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        );

        expect(screen.getByText('404')).toBeInTheDocument();
        expect(screen.getByText('Page was not found')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Back to homepage/i })).toBeInTheDocument();
    });

    test('navigates to /main when button is clicked', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/not-found']}>
                <Routes>
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="/main" element={<div>Homepage</div>} />
                </Routes>
            </MemoryRouter>
        );

        fireEvent.click(screen.getByRole('button', { name: /Back to homepage/i }));

        expect(container.innerHTML).toMatch('Homepage');
    });
});
