 
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyApp from '../pages/_app';  
 
import { PageComponent } from './types'; 
 
jest.mock('../components/MainLayout', () => ({ children }: { children: React.ReactNode }) => <div data-testid="main-layout">{children}</div>);
jest.mock('../components/Layout', () => ({ children }: { children: React.ReactNode }) => <div data-testid="layout">{children}</div>);
 
interface ChildrenProps {
  children?: React.ReactNode;
}
 
const MockPage: PageComponent<ChildrenProps> = ({ children }) => <div>{children}</div>;
 
const CustomLayout: React.FC<ChildrenProps> = ({ children }) => <div data-testid="custom-layout">{children}</div>;

describe('MyApp component', () => {
  test('renders MainLayout and Layout components with page content', () => {
  
    const Component: PageComponent<ChildrenProps> = MockPage;
    const pageProps = {};

    render(<MyApp Component={Component} pageProps={pageProps} />);
 
    expect(screen.getByTestId('main-layout')).toBeInTheDocument();

    
    expect(screen.getByTestId('layout')).toBeInTheDocument();

  
  });

  test('uses custom Layout if specified by Component.Layout', () => {
    
    const Component: PageComponent<ChildrenProps> = () => <div>Custom Page</div>;
    Component.Layout = CustomLayout;

    render(<MyApp Component={Component} pageProps={{}} />);

    
    expect(screen.getByTestId('main-layout')).toBeInTheDocument();
 
    expect(screen.getByTestId('custom-layout')).toBeInTheDocument();
 
    expect(screen.getByText('Custom Page')).toBeInTheDocument();
  });
});

/* 
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyApp from './_app';  
import MainLayout from '../components/MainLayout';
import Layout from '../components/Layout';

 
jest.mock('../components/MainLayout', () => ({ children }: { children: React.ReactNode }) => <div data-testid="main-layout">{children}</div>);
jest.mock('../components/Layout', () => ({ children }: { children: React.ReactNode }) => <div data-testid="layout">{children}</div>);

const MockPage = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;

describe('MyApp component', () => {
    test('renders MainLayout and Layout components with page content', () => {
 
    const Component = MockPage;
    const pageProps = {};
 
    render(<MyApp Component={Component} pageProps={pageProps} />);
 
    expect(screen.getByTestId('main-layout')).toBeInTheDocument();
    
    
    expect(screen.getByTestId('layout')).toBeInTheDocument();
    
  });
  test('uses custom Layout if specified by Component.Layout', () => {
    const CustomLayout = ({ children }: { children: React.ReactNode }) => <div data-testid="custom-layout">{children}</div>;
    const Component = () => <div>Custom Page</div>;
    (Component as any).Layout = CustomLayout;

    render(<MyApp Component={Component} pageProps={{}} />);
    

    expect(screen.getByTestId('main-layout')).toBeInTheDocument();

    
    expect(screen.getByTestId('custom-layout')).toBeInTheDocument();

    expect(screen.getByText('Custom Page')).toBeInTheDocument();
  });
});
*/