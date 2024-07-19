
import ModalCard from "../ModalCard";
import "./index.scss"
import { useSelector } from "react-redux";
import { storedUsersSelector } from "@/store/selectors/getStoredElements";
import { isOpenModal } from "@/store/selectors/isOpenModalSelector";
import { useAppDispatch } from "@/hooks/redux";
import { OpenModalActionCreator } from "@/store/action-creators/openModalActionCreator";
const Modal = () => {
    const storedUsers = useSelector(storedUsersSelector)
    const dispatch = useAppDispatch()
    const isOpen = useSelector(isOpenModal)
    const handleClose = () => {
        dispatch(OpenModalActionCreator())
    }
    if (!isOpen) {
        return <></>
    }
    return (
        <div className="modal">
            <div className="modal__inner">
                <h2 className="modal__title">
                    Yours stored elements
                </h2>
                <div className="modal__elements">
                    {storedUsers.map(item => (
                        <>
                            <ModalCard
                                avatar={item.avatar_url}
                                id={item.id}
                                login={item.login}
                                key={item.id} />
                        </>
                    ))}
                </div>
                <div className="modal__btns">
                    <button className="modal__btn">
                        Download all
                    </button>
                    <button className="modal__btn modal__clear">
                        Clear all
                    </button>
                </div>


                <div className="modal__close">
                    <span className="modal__close__line"></span>
                    <span className="modal__close__line"></span>
                </div>
            </div>
            <div className="modal__overlay" onClick={handleClose}></div>
        </div>
    )


}

export default Modal;