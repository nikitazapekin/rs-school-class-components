 

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

 
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<string, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

 
export const { useGetPokemonByNameQuery, useLazyGetPokemonByNameQuery } = pokemonApi



/*
// UserContext.js
import React, { createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = {
    name: 'John Doe',
    age: 30,
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;



// App.js
import React from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>Welcome to the User Profile App</h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;



// UserProfile.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserProfile;

*/