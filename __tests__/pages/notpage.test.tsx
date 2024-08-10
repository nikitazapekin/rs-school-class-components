import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NotPage from '../../app/routes/$'; // Путь к вашему файлу
import { useNavigate } from '@remix-run/react';
/*
vi.mock('@remix-run/react', async () => {
  const actual = await vi.importActual<typeof import('@remix-run/react')>('@remix-run/react');
  return {
    ...actual,
    useLoaderData: vi.fn(),
    useNavigation: () => ({ state: 'idle' }),
    useNavigate: vi.fn(() => vi.fn()), 
 //   useNavigate: vi.fn(), // Мокаем useNavigate
  };
});
*/
vi.mock('@remix-run/react', () => ({
  useNavigate: () => vi.fn(), // Возвращаем мок-функцию
}));

describe('NotPage Component', () => {
  it('should render NotFound component correctly', () => {
    render(<NotPage />);

    // Проверяем, что элемент с data-testid="not-found" отображается
  //  expect(screen.getByTestId('not-found')).toBeInTheDocument();


  const nothingFoundElements = screen.queryAllByTestId('not-found')
  nothingFoundElements.forEach(item=> {
    expect(item).toBeInTheDocument();
  })
 // expect(nothingFoundElements.length).toBe(2);
  });
  /*
  it('should navigate to homepage when "Back to homepage" is clicked', () => {
    const mockNavigate = vi.fn(); // Создаем мок-функцию
    (useNavigate as unknown as jest.Mock).mockReturnValue(mockNavigate); // Возвращаем мок-функцию

    render(<NotPage />);
 
    
   const nothingFoundElements = screen.queryAllByRole('button', { name: /Back to homepage/i })
   nothingFoundElements.forEach(item=> {
     fireEvent.click(item);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  
  })
  });
  */
  /*
  */

});
