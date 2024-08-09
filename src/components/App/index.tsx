import Header from '../Header';
import List from '../List';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { storedUsersSelector } from '../../store/selectors/getStoredElements';
import StoredUsersButton from '../StoredUsersFlyoutElement';
import Background from '../Background';
import { useAppDispatch } from '../../hooks/redux';
import { setStoredInLocalStorageActionCreator } from '../../store/action-creators/setStoredInLocalStorageQuery';
import { isLoadingSelector } from '../../store/selectors/isLoadingSelector';
import Spinner from '../Spinner';
const App = (
) => {
	const dispatch = useAppDispatch();
	const storedUsers = useSelector(storedUsersSelector);
	const isLoading = useSelector(isLoadingSelector);
	useEffect(() => {
		dispatch(
			setStoredInLocalStorageActionCreator(
				String(localStorage.getItem('searchParam') != null ? localStorage.getItem('searchParam') : ''),
			),
		);
	}, []);
	return (
		<>
			<div className="container">
				<Header />
				<List />
				{storedUsers.length > 0 && <StoredUsersButton />}

			</div>
			<Background />
			{isLoading && <Spinner />}
		</>
	);
};

export default App;


/*
{




	  
	  
	"compilerOptions": {
		
		

		"target": "esnext",

		"forceConsistentCasingInFileNames": true,

		
		"jsx": "react-jsx",

		"module": "esnext",
		 
		 
	 
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true,
		"moduleResolution": "node",
		"baseUrl": "./src",
	 
		
	//	"target": "ES2020",
	 
		"useDefineForClassFields": true,
		"lib": ["ES2020", "DOM", "DOM.Iterable"],
	//	"module": "ESNext",
		"skipLibCheck": true,
 
		//"moduleResolution": "bundler",
		"allowImportingTsExtensions": true,
		"resolveJsonModule": true,
		"isolatedModules": true,
		"noEmit": true, 
		 
		"strict": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"noFallthroughCasesInSwitch": true,

		"paths": {
			"@/*": ["./*"]
		}
		
	},
	"include": ["src", "./jest.setup.ts"],
	"exclude": ["node_modules", "dist"],
	"references": [{ "path": "./tsconfig.node.json" }]
}

*/






