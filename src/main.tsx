/*
import ReactDOM from 'react-dom/client';

import AppRoutes from './utils/routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(<AppRoutes />);
*/

/*

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals.ts";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 */


/*
import { createRoot } from 'react-dom/client'
import AppRoutes from './utils/routes'
createRoot(document.getElementById('root')!).render(<AppRoutes />)

*/



/*
// Before
const container = document.getElementById('app');
render(<App tab="home" />, container, () => {
  console.log('rendered');
});

// After
function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return <App tab="home" />
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);

*/

/*
import * as ReactDOMClient from 'react-dom/client';
import App from 'App';

const container: HTMLElement = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App tab="home" />);

// During an update, there's no need to pass the container again.
root.render(<App tab="profile" />);

*/


/*
import * as ReactDOMClient from 'react-dom/client';
 
import AppRoutes from './utils/routes';

const container = document.getElementById('root');

if (container) {
  // Create a root.
  const root = ReactDOMClient.createRoot(container);

  // Initial render: Render an element to the root.
  //root.render(<App />);

  // During an update, there's no need to pass the container again.
  root.render(<AppRoutes />);
} else {
  console.error('Failed to find the root element');
}

*/

import ReactDOM from 'react-dom/client'; // Ensure you use the new `react-dom/client`
import AppRoutes from './utils/routes';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<AppRoutes />);
} else {
  console.error('Root element with ID "root" not found.');
}
