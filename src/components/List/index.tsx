import './index.scss';
import Spinner from '../Spinner';
import { MyComponentProps } from './types';
import Card from '../Card';
//import { setNextPageActionCreator } from '@/store/action-creators/setSearchParamsActionCreator';
import { useAppDispatch } from '@/hooks/redux';
import { useSelector } from 'react-redux';
import { setNextPageActionCreator, setPrevPageActionCreator } from '@/store/action-creators/setSearchParamsActionCreator';
import { paramsSelector } from '@/store/selectors/getSearchParams';
import { useSearchUsersQuery } from '@/store/slices/querySlice';
import { useEffect } from 'react';
import { getUsersSelector } from '@/store/selectors/getUsersSelector';
interface UserItem {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	score: number;
}
const List = () => {
	const dispatch = useAppDispatch()
	const params = useSelector(paramsSelector)
	const users = useSelector(getUsersSelector)

	const handleNext = () => {
		window.scrollTo(0, 0);
		dispatch(setNextPageActionCreator())
	}

	const handlePrev = () => {
		window.scrollTo(0, 0);
		dispatch(setPrevPageActionCreator())
	}

	//	const { data, error, isLoading } = useSearchUsersQuery({ query: params.query, page: params.offset, per_page: 10 });


	return (
		<section className="list">
			<div className="list__container">

			{/*}	{isLoading && <Spinner />} */}
			{users.map(item=> (
				<Card 
				user={item}
				key={item.id}
				/>
			))}
			{/*}	
				<div className="user__list" data-testid="elems">

					{ data && (

						data.items.map((item: UserItem) => (
							<Card
							user={item}
							key={item.id}
							/>
						))
					)
					}
				</div>
			 

 
				*/}
				<div className="list__btns">
					<button className="list__prev list__btn" onClick={handlePrev}>
						Prev
					</button>
					<button className="list__next list__btn" onClick={handleNext}>
						Next
					</button>
				</div>
			</div>
		</section>
	);
};

export default List;
