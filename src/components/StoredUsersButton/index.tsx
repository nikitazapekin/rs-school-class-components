/*
import "./index.scss"
import { OpenModalActionCreator } from "@/store/action-creators/openModalActionCreator";
import { useAppDispatch } from '@/hooks/redux.ts';
const StoredUsersButton = () => {
    const dispatch = useAppDispatch()
    const handleOpen = ()=> {
dispatch(OpenModalActionCreator())
    }
    return (
        <button className="stored__users" onClick={handleOpen} >
            Click to see your stored users
        </button>

    );
}

export default StoredUsersButton;
*/

import "./index.scss"
import { OpenModalActionCreator } from "@/store/action-creators/openModalActionCreator";
import { useAppDispatch } from '@/hooks/redux.ts';
import { clearStoredElementsActionCreator } from "@/store/action-creators/clearStoredElementsActionCreator";
import { useSelector } from "react-redux";
import { storedUsersSelector } from "@/store/selectors/getStoredElements";
const StoredUsersButton = () => {
    const dispatch = useAppDispatch()
  const users = useSelector(storedUsersSelector)
    const handleOpen = () => {
        dispatch(OpenModalActionCreator())
    }

    const handleClear = ()=> {
        dispatch(clearStoredElementsActionCreator())
    }
    return (
        <div className="stored__users__panel">
            <p className="stored__users__text">
                You choosed {users.length} items
            </p>
            <button className="stored__users__btn stored__users__download">
                Download all
            </button>
            <button className="stored__users__btn stored__users__clear" onClick={handleClear}>
                Clear all
            </button>
            <button className="stored__users__btn stored__users__info" onClick={handleOpen}>
                Info about cards
            </button>
        </div>
    );
}

export default StoredUsersButton;

//    const storedUsers = useSelector(storedUsersSelector);