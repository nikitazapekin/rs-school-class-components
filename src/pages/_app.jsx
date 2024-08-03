
/*
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
*/
import React from 'react';
import App from 'next/app';
/*
import MainLayout from '../components/layouts/main';
import DefaultLayout from '../components/layouts/default';

import MainLayout from "../components-test/layouts/main"
import DefaultLayout from "../components-test/layouts/default"
*/
 
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
