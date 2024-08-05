import { defineConfig } from 'vite';

import tsconfigPaths from 'vite-tsconfig-paths';

import { vitePlugin as remix } from "@remix-run/dev";
// https://vitejs.dev/config/
export default defineConfig({
	plugins:  [ //react(),
     tsconfigPaths(),
		remix({
			future: {
			  v3_fetcherPersist: true,
			  v3_relativeSplatPath: true,
			  v3_throwAbortReason: true,
			},
		  })


	],
});


/*
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});

*/