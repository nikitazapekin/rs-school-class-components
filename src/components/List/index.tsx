import './index.scss';
import Spinner from '../Spinner';
import { MyComponentProps } from './types';
import Card from '../Card';

const List = ({ users, handleNext, handlePrev, isFetching }: MyComponentProps) => {
	return (
		<section className="list">
			<div className="list__container">
				{isFetching && <Spinner />}
				<div className="user__list" data-testid="elems">
				{/*	{users ? (
						users.map((item, index) => (
							<Card
								html_url={item.html_url}
								login={item.login}
								avatar_url={item.avatar_url}
								item={item}
								key={index}
							/>
						))
					) : (
						<p className="list__error">No users found.</p>
					)}


					*/}


{users ? (
						users.map((item, index) => (
							<Card
							 user={item}
								//item={{user: item}}
								key={index}
							/>
						))
					) : (
						<p className="list__error">No users found.</p>
					)}
				</div>
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
