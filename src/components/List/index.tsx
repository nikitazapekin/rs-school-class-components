import { Component } from 'react';
import './index.scss';
import Spinner from '../Spinner';
import { MyComponentProps } from './types';
import Card from '../Card';
class List extends Component<MyComponentProps> {
	render() {
		const {  users, handleNext, handlePrev, isFetching, total } = this.props;
		return (
			<section className="list">
				<div className="list__container">
					{total == 0 && <p className="list__error">Please type username to search user on github or check your entered prompt </p>}
					{isFetching && <Spinner />}
					<div className="user__list">
						{users &&
							users.items.map((item, index) => (
								<Card
									html_url={item.html_url}
									login={item.login}
									avatar_url={item.avatar_url}
									key={index}
								/>
							))}
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
	}
}

export default List;
