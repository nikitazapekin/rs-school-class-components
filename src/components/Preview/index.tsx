import { useSelector } from "react-redux";
import { getReactHookFormParamsSelector } from "../../store/selectors/getReactHookFormParams.selector";
import { historySelector } from "../../store/selectors/history.selector";

const Preview = () => {
  const reactHookFormParams = useSelector(getReactHookFormParamsSelector);
  const history = useSelector(historySelector);

  return (
    <div className="preview">
      <div className="preview__inner">
        <h2 className="preview__form__title">
          Your personal information that you typed into form:
        </h2>
        <div className="preview__form__info">
          <div className="preview__item">
            <p className="preview__item__text">
              <strong>Name:</strong>
              {reactHookFormParams.name}
            </p>
          </div>
          <div className="preview__item">
            <p className="preview__item__text">
              <strong>Age:</strong>
              {reactHookFormParams.age}
            </p>
          </div>

          <div className="preview__item">
            <p className="preview__item__text">
              <strong>Email:</strong>
              {reactHookFormParams.email}
            </p>
          </div>

          <div className="preview__item">
            <p className="preview__item__text">
              <strong>Country:</strong>
              {reactHookFormParams.country}
            </p>
          </div>

          <div className="preview__item">
            <p className="preview__item__text">
              <strong>Password:</strong>
              {reactHookFormParams.password}
            </p>
          </div>

          <div className="preview__item">
            <p className="preview__item__text">
              <strong>Confirm password:</strong>
              {reactHookFormParams.confirmPassword}
            </p>
          </div>

          <div className="preview__item">
            <p className="preview__item__text">
              <strong>Is confirm term:</strong>
            </p>
          </div>
          <div className="preview__item">
            <p className="preview__item__text">
              <strong>Avatar:</strong>
              <img src={reactHookFormParams.avatar} alt="avatar" />
            </p>
          </div>
        </div>
        <div className="preview__history">
          <h2 className="preview__history__title">History</h2>
          <div className="preview__history__elements">
            {history.slice(1).map((item) => (
              <>{JSON.stringify(item)}</>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
