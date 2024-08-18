import {   CardProps} from "./types";

const Card = ({item}: CardProps) => {
    return (
        <div className="card">
        <div className="card__item">
            <div className="card__item__text">
                <strong>Name:</strong>
                <p className="card__item__paragraph">

                    {item.name || "None"}
                </p>
            </div>
        </div>
        <div className="card__item">
            <div className="card__item__text">
                <strong>Age:</strong>
                <p className="card__item__paragraph">

                    {item.age || "None"}
                </p>
            </div>
        </div>

        <div className="card__item">
            <div className="card__item__text">
                <strong>Email:</strong>
                <p className="card__item__paragraph">
                    {item.email || "None"}
                </p>
            </div>
        </div>

        <div className="card__item">
            <div className="card__item__text">
                <strong>Country:</strong>
                <p className="card__item__paragraph">

                    {item.country || "None"}
                </p>
            </div>
        </div>

        <div className="card__item">
            <div className="card__item__text">
                <strong>Password:</strong>
                <p className="card__item__paragraph">
                    {item.password || "None"}
                </p>
            </div>
        </div>

        <div className="card__item">
            <div className="card__item__text">
                <strong>Confirm password:</strong>
                <p className="card__item__paragraph">
                    {item.confirmPassword || "None"}
                </p>
            </div>
        </div>

        <div className="card__item">
            <div className="card__item__text">
                <strong>Is confirm term:</strong>
                <p className="card__item__paragraph">
                    {item.agreeToTerms || "None"}
                </p>
            </div>
        </div>
        <div className="card__item">
            <div className="card__item__text">
                <strong>Avatar:</strong>
                <img src={item.avatar || "None"} alt="avatar" />
            </div>
        </div>
    </div>
      );
}
 
export default Card;