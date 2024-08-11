import reducer, { setSelectedElement } from '../../src/store/slices/selectedElementsSlice';
import { SelectedElementsState } from '../../src/store/types';
import { test, expect } from 'vitest';
const previousState: SelectedElementsState = {
	storedElements: [
	 
	],

	selectedElement: null,
};
test('should handle a todo being added to an existing list', () => {
	const expectedState = {
		storedElements: [
		 
		],

		selectedElement: 	{
            login: 'Nik',
            id: 1,
            node_id: '1',
            avatar_url: 'dcdsc',
            gravatar_id: 'kjj',
            url: 'lmd',
            html_url: 'ldm',
            followers_url: 'ldmv',
            following_url: 'nkdv',
            gists_url: 'ndls',
            starred_url: 'cmk',
            subscriptions_url: 'kekc',
            organizations_url: 'kdc',
            repos_url: 'mld',
            events_url: 'kmd',
            received_events_url: 'dclm',
            type: 'dlcm',
            site_admin: false,
            score: 22,
        },
	};

	expect(reducer(previousState, setSelectedElement(
        {
            login: 'Nik',
            id: 1,
            node_id: '1',
            avatar_url: 'dcdsc',
            gravatar_id: 'kjj',
            url: 'lmd',
            html_url: 'ldm',
            followers_url: 'ldmv',
            following_url: 'nkdv',
            gists_url: 'ndls',
            starred_url: 'cmk',
            subscriptions_url: 'kekc',
            organizations_url: 'kdc',
            repos_url: 'mld',
            events_url: 'kmd',
            received_events_url: 'dclm',
            type: 'dlcm',
            site_admin: false,
            score: 22,
        },
    ))).toEqual(expectedState);
});