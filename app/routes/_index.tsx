 
import React from 'react';
 
//import { setTest } from '../../src/teststore/slice';
import App from "../../src/App"
import { setTets } from '../../src/store/slices/appSlice';
import { ThemeProvider } from '../../src/components/ThemeContext';
export default function Index() {
  return (
    <>
<ThemeProvider>

      <App />
</ThemeProvider>
   
    </>
  );
}

/*
import type { MetaFunction } from '@remix-run/node';
import React from 'react';
 
import {getTest} from "../../src/teststore/selector"
import { useAppDispatch, useAppSelector } from '../../src/teststore/hooks';
import { setTest } from '../../src/teststore/slice';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const dispatch = useAppDispatch();
  const testValue = useAppSelector(getTest);

  return (
    <>
      
      <div>{testValue}</div>
      <button onClick={() => dispatch(setTest('New Test'))}>
        Update Test
      </button>
    </>
  );
}
*/


/*
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import App from "../../src/App"
import { getTest } from "../../src/store/selectors/getTest"
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../src/hooks/redux";
import { setTets } from "../../src/store/slices/appSlice";
import Test from "../../src/components/Test/index"
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
const dispatch = useAppDispatch()

 const is = useSelector(getTest)
   return (
    <>


<App />
   acsacs 
{is}

<button onClick={dispatch(setTets())}
>
  dd
</button>
 

    </>
  );
}


*/