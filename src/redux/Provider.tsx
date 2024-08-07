 import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

function Providers({children}: {children: React.ReactNode}) {
    return <Provider store={store}>{children}</Provider>;
}

export default Providers;

//npm install @babel/preset-react --save-dev --legacy-peer-deps
//npm install @babel/preset-typescript --save-dev --legacy-peer-deps
//npm install @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties --save-dev --legacy-peer-deps
//npm install typescript --save-dev --legacy-peer-deps
//npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties @babel/plugin-transform-private-methods @babel/plugin-transform-private-property-in-object @babel/plugin-transform-react-jsx --legacy-peer-deps
 