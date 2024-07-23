//import { AppStatee } from "../types";
import appSlice from "./appSlice";
import { setClearStoredElements } from "./appSlice";

describe('appReducer sync actions', () => {
    const initialState = {
        isLoading: false,
        error: null,
        storedElements: [
            {
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
            }
        ],
        users: [],
        params: {
            limit: 10,
            offset: 1,
            query: "",
            storedValue: ""
        },
        selectedElement: null
    };

    it('should handle clearing stored elements', () => {
        expect(appSlice(initialState, setClearStoredElements())).toEqual({
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
        });
    });
});







/*//import { AppStatee } from "../types";
import  {setClearStoredElements} from "./appSlice";



describe('counter reducer sync actions', () => {
   const initialState: AppStatee = {


        isLoading: false,
        error: null,
        storedElements: [
            {
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
              }
        ],
        users: [],
        params: {
            limit: 10,
            offset: 1,
            query: "",
            storedValue: ""
        },
        selectedElement: null
 



    }  
    it('should handle initial state', () => {
      expect(setClearStoredElements).toEqual({
      

        isLoading: false,
        error: null,
        storedElements: [
            
        ],
        users: [],
        params: {
            limit: 10,
            offset: 1,
            query: "",
            storedValue: ""
        },
        selectedElement: null
      })
    })

})
*/



/*import counterReducer, {
    CounterState,
    increment,
    decrement,
    incrementByAmount,
    counterStatus,
    incrementAsync
  } from './counterSlice'
  
  describe('counter reducer sync actions', () => {
    const initialState: CounterState = {
      value: 3,
      status: counterStatus.idle,
      error: ''
    }
    it('should handle initial state', () => {
      expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
        value: 0,
        status: counterStatus.idle,
        error: ''
      })
    })
  
    it('should handle increment', () => {
      const actual = counterReducer(initialState, increment())
      expect(actual.value).toEqual(4)
    })
  
    it('should handle decrement', () => {
      const actual = counterReducer(initialState, decrement())
      expect(actual.value).toEqual(2)
    })
  
    it('should handle incrementByAmount', () => {
      const actual = counterReducer(initialState, incrementByAmount(2))
      expect(actual.value).toEqual(5)
    })
  })
  
  describe('counter reducer async actions', () => {
    const initialState: CounterState = {
      value: 5,
      status: counterStatus.idle,
      error: ''
    }
  
    it('should set status to "pending"', async () => {
      const action = { type: incrementAsync.pending.type }
      const state = counterReducer(initialState, action)
      expect(state).toEqual({
        ...initialState,
        status: counterStatus.pending
      })
    })
  
    it('should set status to "idle"', async () => {
      const amount = 2
      const action = { type: incrementAsync.fulfilled.type, payload: amount }
      const state = counterReducer(initialState, action)
      expect(state).toEqual({
        ...initialState,
        value: initialState.value + amount,
        status: counterStatus.idle
      })
    })
  
    it('should set status to "failed"', async () => {
      const action = {
        type: incrementAsync.rejected.type,
        payload: 'loading error'
      }
      const state = counterReducer(initialState, action)
      expect(state).toEqual({
        ...initialState,
        error: 'loading error',
        status: counterStatus.failed
      })
    })
  })*/