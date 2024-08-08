
import React from 'react';
import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
//import { store } from '../src/store/store';
import { Provider } from 'react-redux';
//import {store} from "../src/teststore/store"
import { store } from '../src/store/store';
startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <Provider store={store}>
        <RemixBrowser />
      </Provider>
    </StrictMode>
  );
});
