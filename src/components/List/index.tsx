import React from 'react';
import Spinner from '../Spinner';
import Card from '../Card';
import { useAppDispatch } from '../../hooks/redux';
import { useSelector } from 'react-redux';
import {
  setNextPageActionCreator,
  setPrevPageActionCreator,
} from '../../store/action-creators/setSearchParamsActionCreator';
import { paramsSelector } from '../../store/selectors/getSearchParams';
import { getUsersSelector } from '../../store/selectors/getUsersSelector';
import { isLoadingSelector } from '../../store/selectors/isLoadingSelector';
import useURL from '../../hooks/useURL';
import { CSSProperties } from 'react';

const List: React.FC = () => {
  const { setPage } = useURL();
  const dispatch = useAppDispatch();
  const users = useSelector(getUsersSelector);
  const params = useSelector(paramsSelector);
  const isLoading = useSelector(isLoadingSelector);

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
    <section  data-testid="list" style={styles.list}>
      <div style={styles.container}>
        {isLoading && <Spinner />}
        {users.map((item) => (
          <Card user={item} key={item.id} />
        ))}
        {users.length === 0 && <p style={styles.nothing}>Nothing found</p>}
        <div style={styles.btns}>
          <button style={styles.btn} onClick={handlePrev}>
            Prev
          </button>
          <button style={{ ...styles.btn, ...styles.next }} onClick={handleNext} data-testid="next">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, CSSProperties> = {
  list: {
    marginTop: '90px',
  },
  container: {
  
  },
  btns: {
    display: 'flex',
    columnGap: '30px',
    justifyContent: 'center',
    marginTop: '20px',
  },
  btn: {
    padding: '10px 25px',
    cursor: 'pointer',
    transition: '1s',
    fontSize: '30px',
    backgroundColor: 'transparent',
    border: 'none',
  },
  next: {
 
  },
  btnHover: {
    backgroundColor: 'rgb(90, 90, 190)',
    color: '#fff',
  },
  nothing: {
    fontSize: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    fontSize: '56px',
    textAlign: 'center',
  },
};

export default List;


/*
//import './index.scss';
import Spinner from '../Spinner';
import Card from '../Card';
import { useAppDispatch } from '../..//hooks/redux';
import { useSelector } from 'react-redux';
import {
	setNextPageActionCreator,
	setPrevPageActionCreator,
} from '../../store/action-creators/setSearchParamsActionCreator';
import { paramsSelector } from '../../store/selectors/getSearchParams';
import { getUsersSelector } from '../../store/selectors/getUsersSelector';
import { isLoadingSelector } from '../../store/selectors/isLoadingSelector';
import useURL from '../../hooks/useURL';

const List = () => {
	const { setPage } = useURL();
	const dispatch = useAppDispatch();
	const users = useSelector(getUsersSelector);
	const params = useSelector(paramsSelector);
	const isLoading = useSelector(isLoadingSelector);

	const handleNext = () => {
		window.scrollTo(0, 0);
		dispatch(setNextPageActionCreator());
		setPage(params.offset+1, params.query);
	};

	const handlePrev = () => {
		window.scrollTo(0, 0);
		dispatch(setPrevPageActionCreator());
		setPage(params.offset-1, params.query);
	};

	return (
		<section className="list">
			<div className="list__container">
				{isLoading && <Spinner />}
				{users.map((item) => (
					<Card user={item} key={item.id} />
				))}
				{users.length == 0 && <p className="list__nothing">Nothing found</p>}

				<div className="list__btns">
					<button className="list__prev list__btn" onClick={handlePrev}>
						Prev
					</button>
					<button className="list__next list__btn" onClick={handleNext} data-testid="next">
						Next
					</button>
				</div>
			</div>
		</section>
	);
};

export default List;
*/