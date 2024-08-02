'use client'
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../../lib/store';
// import { initializeCount } from '../../lib/features/counter/counterSlice';
import { setTest } from '../../lib/slices/testSlice';
import { setSearchParamsActionCreator } from '../../lib/action-creators/setSearchParamsActionCreator';
export default function StoreProvider({
  // count,
  children,
}: {
  // count: number,
  children: React.ReactNode,
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
   // storeRef.current.dispatch(setSearchParamsActionCreator(page: number, query: string));
    // storeRef.current.dispatch(setTest());
    // storeRef.current.dispatch(initializeCount(count));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}


/*
'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../../lib/store'
//import { initializeCount } from '../../lib/features/counter/counterSlice'
import appSlice from '../../lib/slices/appSlice'
import { setTest } from '../../lib/slices/testSlice'
export default function StoreProvider({
  //count,
  children,
}: {
  //count: number
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  //  storeRef.current.dispatch(setTest())
    //storeRef.current.dispatch(initializeCount(count))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

*/
/*'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
//import { makeStore, AppStore } from '../lib/store'
import { makeStore, AppStore } from '../../lib/store'
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

*/