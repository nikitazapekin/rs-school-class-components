 "use client"
 import styles from "./index.module.scss"
 import Card from "../Card";
 import React from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { useSelector } from "react-redux";
import { paramsSelector } from "../../../redux/selectors/getSearchParams";
import useURL from "../../../hooks/useURL";
import { setPrevPageActionCreator } from "../../../redux/action-creators/setSearchParamsActionCreator";
import { storedUsersSelector } from "../../../redux/selectors/getStoredElements";
import { setNextPageActionCreator } from "../../../redux/action-creators/setSearchParamsActionCreator";
import StoredUsersButton from "../StoredUsersFlyoutElement";
import ErrorComponent from "../ErrorComponent";
import { ErrorBoundary } from "../ErrorBoundary";
import Providers from "../../../redux/Provider";
type UserDataArray = Array<{
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
}>; 

interface AppProps {
	users: UserDataArray;
  }
function App({ users }: AppProps) {
 const dispatch = useAppDispatch()
const params = useSelector(paramsSelector)
const {setPage} =useURL()
const storedUsers = useSelector(storedUsersSelector);
	const handleNext = () => {
		window.scrollTo(0, 0);
		dispatch(setNextPageActionCreator());
		setPage(params.offset + 1, params.query);
	};

	const handlePrev = () => {
		window.scrollTo(0, 0);
		dispatch(setPrevPageActionCreator());
		setPage(params.offset - 1, params.query);
	};
  return (
  <>
<Providers>
<ErrorBoundary>
<section className={styles.list}>
			<div className={styles.list__container}>
				{users.map((item) => (
					<Card user={item} key={item.id} />
					))}
				{users.length === 0 && <p className={styles.list__nothing}>Nothing found</p>}
				<div className={styles.list__btns}>
					<button className={`${styles.list__prev} ${styles.list__btn}`} onClick={handlePrev}
					>
						Prev
					</button>
					<button className={`${styles.list__next} ${styles.list__btn}`} onClick={handleNext} 
					data-testid="next">
						Next
					</button>
				</div>
			</div>
		</section>
		{storedUsers.length > 0 && <StoredUsersButton />}
 <ErrorComponent />
 
	</ErrorBoundary>
						</Providers>
  </>
  );
  }
  export default  App 