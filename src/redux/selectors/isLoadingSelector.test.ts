import { isLoadingSelector } from './isLoadingSelector';
import { RootState } from '../store';

describe('isLoadingSelector', () => {
  it('should return the correct isLoading value from state', () => {
    const mockState: RootState = {
      appSlice: {
        isLoading: true,  
        error: null,
        isLoadingUserData: false,
        users: [],
        typedValue: "",
        params: {
          limit: 10,
          offset: 1,
          query: '',
          storedValue: '',
        },
        status: 'idle',
        clickedUser: {
          login: "",
          id: 0,
          node_id: "",
          avatar_url: "",
          gravatar_id: "",
          url: "",
          html_url: "",
          followers_url: "",
          following_url: "",
          gists_url: "",
          starred_url: "",
          subscriptions_url: "",
          organizations_url: "",
          repos_url: "",
          events_url: "",
          received_events_url: "",
          type: "",
          site_admin: false,
          score: 0
        }
      },
      selectedElementsSlice: {
        storedElements: [],
        selectedElement: null,
      },
      themeSlice: {
        isDark: false, 
      },
    };

 
    const expectedIsLoading = mockState.appSlice.isLoading;
 
    const result = isLoadingSelector(mockState);
 
    expect(result).toBe(expectedIsLoading);
  });
});
