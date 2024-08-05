/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */
import React from "react";
import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { store } from "../src/store/store";
import { Provider } from "react-redux";
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


/*
startTransition(() => {
  
  if(typeof window.globalStore === 'undefined'){
    window.globalStore = store;
  }

  hydrateRoot(
    document,
    <StrictMode>
      <Provider store={window.globalStore}>
        <RemixBrowser />
      </Provider>
    </StrictMode>
  );
});
*/