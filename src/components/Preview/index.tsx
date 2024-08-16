import { useSelector } from "react-redux";
import { getReactHookFormParamsSelector } from "../../store/selectors/getReactHookFormParams.selector";

const Preview = () => {
    const reactHookFormParams = useSelector(getReactHookFormParamsSelector)
    console.log(reactHookFormParams)
    return (
        <div className="preview">

            <div className="preview__inner">

                <h2 className="preview__form__title">
                    React hook form data
                </h2>
                <div className="preview__form__info">
                    <div className="preview__item">
                        <p className="preview__item__text">
                            <strong>
                                Name:
                            </strong>
                            {reactHookFormParams.name}
                        </p>
                    </div>




                    <div className="preview__item">
                        <p className="preview__item__text">
                            <strong>
                                Age:
                            </strong>
                            {reactHookFormParams.age}
                        </p>
                    </div>

                    <div className="preview__item">
                        <p className="preview__item__text">
                            <strong>
                              Email:
                            </strong>
                            {reactHookFormParams.email}
                        </p>
                    </div>



                    <div className="preview__item">
                        <p className="preview__item__text">
                            <strong>
                                Country:
                            </strong>
                            {reactHookFormParams.country}
                        </p>
                    </div>


                    <div className="preview__item">
                        <p className="preview__item__text">
                            <strong>
                                Password:
                            </strong>
                            {reactHookFormParams.password}
                        </p>
                    </div>





                    <div className="preview__item">
                        <p className="preview__item__text">
                            <strong>
                                Confirm password:
                            </strong>
                            {reactHookFormParams.confirmPassword}
                        </p>
                    </div>


                    <div className="preview__item">
                        <p className="preview__item__text">
                            <strong>
                            Is confirm term:
                            </strong>
                            
                            {JSON.stringify(reactHookFormParams.agreeToTerms)}
                        </p>
                    </div>






                    <div className="preview__item">
                        <p className="preview__item__text">
                            <strong>
                         Avatar:
                            </strong>
                        <img src={reactHookFormParams.avatar} alt="avatar" />
                        </p>
                    </div>

                </div>
            </div>



            {JSON.stringify(reactHookFormParams)}
        </div>
    );
}

export default Preview;