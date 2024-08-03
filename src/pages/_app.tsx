
/*
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
*/







/*
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
        <AppLayout query={pageProps.query}>  
          <Component {...pageProps} />
        </AppLayout>
      </MainLayout>
    );
  }
}

export default MyApp;
*/

import React from 'react';
import App from 'next/app';

import MainLayout from '../components/MainLayout';
import Layout from '../components/Layout';
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
/*
*/