import "./index.scss"
interface ModalCardProps {
    avatar: string;
    id: number,
    login: string
}
const ModalCard = ({ avatar, id, login }: ModalCardProps) => {
    return (
        <div className="modal__card">
            <div className="modal__card__inner">
                <img src={avatar} alt="avatar" className="modal__card__avatar" />
                <p className="modal__card__title">
                    {login}
                </p>
                <div className="modal__card__btns">
                    <button className="modal__card__btn">Download</button>
                    <button className="modal__card__btn modal__card__clear">Delete</button>
                </div>
            </div>
        </div>
    );
}
export default ModalCard;