 
import React from 'react';
import App from 'next/app';

import MainLayout from '../components/MainLayout';
import Layout from '../components/Layout';
 
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const AppLayout = Component.Layout || Layout;
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
 