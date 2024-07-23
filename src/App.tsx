
import Header from './components/Header';
import List from './components/List';
import { ErrorBoundary } from './components/ErrorBoundary';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { storedUsersSelector } from './store/selectors/getStoredElements';
import StoredUsersButton from './components/StoredUsersFlyoutElement';
import { ThemeProvider } from './components/ThemeContext';
import Background from './components/Background';
import ErrorComponent from './components/ErrorComponent';
 
 
import { useAppDispatch } from './hooks/redux';
import { setStoredInLocalStorageActionCreator } from './store/action-creators/setStoredInLocalStorageQuery';
import { isLoadingSelector } from './store/selectors/isLoadingSelector';
import Spinner from './components/Spinner';
const App = () => {
  const dispatch = useAppDispatch()
  const storedUsers = useSelector(storedUsersSelector);
  const isLoading = useSelector(isLoadingSelector)
  useEffect(() => {
    dispatch(setStoredInLocalStorageActionCreator(String(localStorage.getItem("searchParam") != null ? localStorage.getItem("searchParam") : "")))
  }, [])
  return (
    <>
      <ErrorBoundary>
        <ThemeProvider>
          <div className="container">
            <Header />
            <List
            />
            {storedUsers.length > 0 && (
              <StoredUsersButton />
            )}
            <ErrorBoundary>
              <ErrorComponent />
            </ErrorBoundary>
          </div>
          <Background />
           {isLoading && <Spinner />}
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;
