import { useSelector } from "react-redux";
import { getReactHookFormParamsSelector } from "../../store/selectors/getReactHookFormParams.selector";
import { historySelector } from "../../store/selectors/history.selector";
import "./index.scss"
import Card from "../Card";
const Preview = () => {
    const reactHookFormParams = useSelector(getReactHookFormParamsSelector);
    const history = useSelector(historySelector);
    return (
        <div className="preview">
            <div className="preview__inner">
                <div className="preview__form">

                    <h2 className="preview__form__title">
                        Your personal information that you typed into form:
                    </h2>
                    <div className="preview__form__info">
                        <div className="preview__item">
                            <div className="preview__item__text">
                                <strong>Name:</strong>
                                <p className="preview__item__paragraph">

                                    {reactHookFormParams.name || "None"}
                                </p>
                            </div>
                        </div>
                        <div className="preview__item">
                            <div className="preview__item__text">
                                <strong>Age:</strong>
                                <p className="preview__item__paragraph">

                                    {reactHookFormParams.age || "None"}
                                </p>
                            </div>
                        </div>

                        <div className="preview__item">
                            <div className="preview__item__text">
                                <strong>Email:</strong>
                                <p className="preview__item__paragraph">
                                    {reactHookFormParams.email || "None"}
                                </p>
                            </div>
                        </div>

                        <div className="preview__item">
                            <div className="preview__item__text">
                                <strong>Country:</strong>
                                <p className="preview__item__paragraph">

                                    {reactHookFormParams.country || "None"}
                                </p>
                            </div>
                        </div>

                        <div className="preview__item">
                            <div className="preview__item__text">
                                <strong>Password:</strong>
                                <p className="preview__item__paragraph">
                                    {reactHookFormParams.password || "None"}
                                </p>
                            </div>
                        </div>

                        <div className="preview__item">
                            <div className="preview__item__text">
                                <strong>Confirm password:</strong>
                                <p className="preview__item__paragraph">
                                    {reactHookFormParams.confirmPassword || "None"}
                                </p>
                            </div>
                        </div>

                        <div className="preview__item">
                            <div className="preview__item__text">
                                <strong>Is confirm term:</strong>
                                <p className="preview__item__paragraph">
                                    {reactHookFormParams.agreeToTerms || "None"}
                                </p>
                            </div>
                        </div>
                        <div className="preview__item">
                            <div className="preview__item__text">
                                <strong>Avatar:</strong>
                                <img src={reactHookFormParams.avatar || "None"} alt="avatar" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="preview__history">
                    <h2 className="preview__history__title">History</h2>
                    <div className="preview__history__elements">
                        {history.slice(1).map((item,index) => (
                          <Card item={item} key={index}/>
                        ))}
                        {history.length <=1 && (
                            <p  className="preview__history__nothing">
                                Nothing to show
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;

                  