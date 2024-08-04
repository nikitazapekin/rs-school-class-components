// app/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import MainLayout from '../components/MainLayout';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  // Переопределяемый Layout
  const AppLayout = (Component as any).Layout || Layout;
  
  return (
    <MainLayout>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </MainLayout>
  );
}

export default MyApp;




/*
import React from 'react';
import App from 'next/app';
 
import Layout from '../components/Layout';
import MainLayout from '../components/MainLayout';
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const AppLayout = Component.Layout || Layout;
    console.log("COMP", Component.Layout)
    return (
      <MainLayout>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </MainLayout>
    );
  }
}

export default MyApp;
*/