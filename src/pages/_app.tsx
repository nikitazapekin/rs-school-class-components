/*
import React from 'react';
import { AppProps } from 'next/app';
import MainLayout from '../components/MainLayout';
import Layout from '../components/Layout';

 
type PageProps = {
 
};

 
type LayoutComponent = React.ComponentType;

 
interface MyAppProps extends AppProps<PageProps> {
  Component: React.ComponentType<PageProps> & { Layout?: LayoutComponent };
}

 
const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  
  const AppLayout = Component.Layout || Layout;

  return (
    <MainLayout>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </MainLayout>
  );
};

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
import Router from "next/router";

    export default function App({ Component, pageProps }) {
      const [loading, setLoading] = React.useState(false);
      React.useEffect(() => {
        const start = () => {
          console.log("start");
          setLoading(true);
        };
        const end = () => {
          console.log("finished");
          setLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
          Router.events.off("routeChangeStart", start);
          Router.events.off("routeChangeComplete", end);
          Router.events.off("routeChangeError", end);
        };
      }, []);
      return (
        <>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <Component {...pageProps} />
          )}
        </>
      );
    }
          */