

 
import './index.scss';
import Spinner from '../Spinner';
import Card from '../Card';
import { useAppDispatch } from '@/hooks/redux';
import { useSelector } from 'react-redux';
import { setNextPageActionCreator, setPrevPageActionCreator } from '@/store/action-creators/setSearchParamsActionCreator';
import { paramsSelector } from '@/store/selectors/getSearchParams';
import { getUsersSelector } from '@/store/selectors/getUsersSelector';
import { isLoadingSelector } from '@/store/selectors/isLoadingSelector';
import useURL from '@/hooks/useURL';


const List = () => {
  const { setPage } = useURL();
  const dispatch = useAppDispatch();
  const users = useSelector(getUsersSelector);
  const params = useSelector(paramsSelector);
  const isLoading = useSelector(isLoadingSelector);

  const handleNext = () => {
    window.scrollTo(0, 0);
    dispatch(setNextPageActionCreator());
    setPage(params.offset, params.query);
  };

  const handlePrev = () => {
    window.scrollTo(0, 0);
    dispatch(setPrevPageActionCreator());
    setPage(params.offset, params.query);
  };

  return (
    <section className="list">
      <div className="list__container">
        {isLoading && <Spinner />}
        {users.map((item) => (
          <Card user={item} key={item.id} />
        ))}

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
  