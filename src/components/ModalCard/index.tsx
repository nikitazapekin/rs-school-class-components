
import { clearStoredElementsByIdActionCreator } from "@/store/action-creators/removeStoredElementByIdActionCreator";
import "./index.scss"
import { useAppDispatch } from "@/hooks/redux";
 
interface UserItem {
    user: {

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
    }
}

const ModalCard = ({ user }: UserItem) => {

    const dispatch = useAppDispatch()
    const handleRemove = () => {
        dispatch(clearStoredElementsByIdActionCreator(user.id))
     //   if()
    }
    return (
        <div className="modal__card">
            <div className="modal__card__inner">
                <img src={user.html_url} alt="avatar" className="modal__card__avatar" />
                <p className="modal__card__title">
                    {user.login}
                </p>
                <div className="modal__card__btns">
                    <button className="modal__card__btn">Download</button>
                    <button className="modal__card__btn modal__card__clear" onClick={handleRemove}>Delete</button>
                </div>
            </div>
        </div>
    );
}
export default ModalCard;

/*
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

*/