



import reducer, { setAddToStoredElement } from "../slices/appSlice"
import { AppStatee } from "../types"
const previousState: AppStatee =  {
    isLoading: false,
    error: null,
    storedElements: [],
    users: [],
    params: {
        limit: 10,
        offset: 1,
        query: "",
        storedValue: ""
    },
    selectedElement: null
}
test('should handle a todo being added to an existing list', () => {
    const expectedState = {
      ...previousState,
      storedElements: [...previousState.storedElements, {
        login: "Nik",
        id: 1,
        node_id: "1",
        avatar_url: "dcdsc",
        gravatar_id: "kjj",
        url: "lmd",
        html_url: "ldm",
        followers_url: "ldmv",
        following_url: "nkdv",
        gists_url: "ndls",
        starred_url: "cmk",
        subscriptions_url: "kekc",
        organizations_url: "kdc",
        repos_url: "mld",
        events_url: "kmd",
        received_events_url: "dclm",
        type: "dlcm",
        site_admin: false,
        score: 22
      }]
    };
  
    expect(reducer(previousState, setAddToStoredElement({
        login: "Nik",
        id: 1,
        node_id: "1",
        avatar_url: "dcdsc",
        gravatar_id: "kjj",
        url: "lmd",
        html_url: "ldm",
        followers_url: "ldmv",
        following_url: "nkdv",
        gists_url: "ndls",
        starred_url: "cmk",
        subscriptions_url: "kekc",
        organizations_url: "kdc",
        repos_url: "mld",
        events_url: "kmd",
        received_events_url: "dclm",
        type: "dlcm",
        site_admin: false,
        score: 22
    }))).toEqual(expectedState);
  });
/*
test('should handle a todo being added to an existing list', () => {

    expect(reducer(previousState, setAddToStoredElement({
        login: "Nik", id: 1, node_id: "1", avatar_url: "dcdsc", gravatar_id: "kjj", url: "lmd", html_url: "ldm", followers_url: "ldmv", following_url: "nkdv", gists_url: "ndls", starred_url: "cmk",
        subscriptions_url: "kekc", organizations_url: "kdc", repos_url: "mld", events_url: "kmd", received_events_url: "dclm", type: "dlcm", site_admin: false, score: 22
    }))).toEqual(
        
        previousState.storedElements=  [
            {
                login: "Nik", id: 1, node_id: "1", avatar_url: "dcdsc", gravatar_id: "kjj", url: "lmd", html_url: "ldm", followers_url: "ldmv", following_url: "nkdv", gists_url: "ndls", starred_url: "cmk",
                subscriptions_url: "kekc", organizations_url: "kdc", repos_url: "mld", events_url: "kmd", received_events_url: "dclm", type: "dlcm", site_admin: false, score: 22
            }
        ]
    )
})
*/


/*       
       [
       {
           login: "Nik", id: 1, node_id: "1", avatar_url: "dcdsc", gravatar_id: "kjj", url: "lmd", html_url: "ldm", followers_url: "ldmv", following_url: "nkdv", gists_url: "ndls", starred_url: "cmk",
           subscriptions_url: "kekc", organizations_url: "kdc", repos_url: "mld", events_url: "kmd", received_events_url: "dclm", type: "dlcm", site_admin: false, score: 22
       }
   ]
*/


//import reducer, { todoAdded, Todo } from './todosSlice'

/*
import reducer, { setAddToStoredElement } from "../slices/appSlice"
import { UserItem, UserDataArray, AppStatee } from "../types"
test('should handle a todo being added to an existing list', () => {
    const previousState: UserItem[] = [
 //       const previousState:AppStatee[] = [
        {
            login: "Nik", id: 1, node_id: "1", avatar_url: "dcdsc", gravatar_id: "kjj", url: "lmd", html_url: "ldm", followers_url: "ldmv", following_url: "nkdv", gists_url: "ndls", starred_url: "cmk",
            subscriptions_url: "kekc", organizations_url: "kdc", repos_url: "mld", events_url: "kmd", received_events_url: "dclm", type: "dlcm", site_admin: false, score: 22
        }
    ]

    expect(reducer(previousState, setAddToStoredElement({
        login: "Nik", id: 1, node_id: "1", avatar_url: "dcdsc", gravatar_id: "kjj", url: "lmd", html_url: "ldm", followers_url: "ldmv", following_url: "nkdv", gists_url: "ndls", starred_url: "cmk",
        subscriptions_url: "kekc", organizations_url: "kdc", repos_url: "mld", events_url: "kmd", received_events_url: "dclm", type: "dlcm", site_admin: false, score: 22
    }))).toEqual([
        {
            login: "Nik", id: 1, node_id: "1", avatar_url: "dcdsc", gravatar_id: "kjj", url: "lmd", html_url: "ldm", followers_url: "ldmv", following_url: "nkdv", gists_url: "ndls", starred_url: "cmk",
            subscriptions_url: "kekc", organizations_url: "kdc", repos_url: "mld", events_url: "kmd", received_events_url: "dclm", type: "dlcm", site_admin: false, score: 22
        },
        {
            login: "Nik", id: 1, node_id: "1", avatar_url: "dcdsc", gravatar_id: "kjj", url: "lmd", html_url: "ldm", followers_url: "ldmv", following_url: "nkdv", gists_url: "ndls", starred_url: "cmk",
            subscriptions_url: "kekc", organizations_url: "kdc", repos_url: "mld", events_url: "kmd", received_events_url: "dclm", type: "dlcm", site_admin: false, score: 22
        }
    ])
})





*/
/*
  expect(reducer(previousState, todoAdded('Use Redux'))).toEqual([
    { text: 'Run the tests', completed: true, id: 0 },
    { text: 'Use Redux', completed: false, id: 1 }
  ])
    */
/*
test('should return the initial state', () => {
  expect(reducer(undefined, { type: 'unknown' })).toEqual([
    { text: 'Use Redux', completed: false, id: 0 }
  ])
})

test('should handle a todo being added to an empty list', () => {
  const previousState: Todo[] = []

  expect(reducer(previousState, todoAdded('Run the tests'))).toEqual([
    { text: 'Run the tests', completed: false, id: 0 }
  ])
})

test('should handle a todo being added to an existing list', () => {
  const previousState: Todo[] = [
    { text: 'Run the tests', completed: true, id: 0 }
  ]

  expect(reducer(previousState, todoAdded('Use Redux'))).toEqual([
    { text: 'Run the tests', completed: true, id: 0 },
    { text: 'Use Redux', completed: false, id: 1 }
  ])
})

*/


/*


import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Todo = {
  id: number
  text: string
  completed: boolean
}

const initialState: Todo[] = [{ text: 'Use Redux', completed: false, id: 0 }]

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action: PayloadAction<string>) {
      state.push({
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: action.payload
      })
    }
  }
})

export const { todoAdded } = todosSlice.actions

export default todosSlice.reducer


import reducer, { todoAdded, Todo } from './todosSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: 'unknown' })).toEqual([
    { text: 'Use Redux', completed: false, id: 0 }
  ])
})

test('should handle a todo being added to an empty list', () => {
  const previousState: Todo[] = []

  expect(reducer(previousState, todoAdded('Run the tests'))).toEqual([
    { text: 'Run the tests', completed: false, id: 0 }
  ])
})

test('should handle a todo being added to an existing list', () => {
  const previousState: Todo[] = [
    { text: 'Run the tests', completed: true, id: 0 }
  ]

  expect(reducer(previousState, todoAdded('Use Redux'))).toEqual([
    { text: 'Run the tests', completed: true, id: 0 },
    { text: 'Use Redux', completed: false, id: 1 }
  ])
})
  */
























/*import { loginRequest, loginSuccess } from "./actions";

it('creates a LOGIN_REQUEST action', () => {
  const expectedAction = {
    type: 'LOGIN_REQUEST',
  }

  expect(loginRequest()).toEqual(expectedAction);
});

it('creates a LOGIN_SUCCESS action', () => {
  const encoded = 'xxxx';
  const expectedAction = {
    type: 'LOGIN_SUCCESS',
    payload: {
      encoded
    }
  }

  expect(loginSuccess(encoded)).toEqual(expectedAction)
});
*/