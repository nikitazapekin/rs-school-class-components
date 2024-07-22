 

import "./index.scss"
import { useAppDispatch } from '@/hooks/redux.ts';
import { clearStoredElementsActionCreator } from "@/store/action-creators/clearStoredElementsActionCreator";
import { useSelector } from "react-redux";
import { storedUsersSelector } from "@/store/selectors/getStoredElements";
const StoredUsersButton = () => {
    const dispatch = useAppDispatch()
    const users = useSelector(storedUsersSelector)
    const handleClear = () => {
        dispatch(clearStoredElementsActionCreator())
    }
    return (
        <div className="stored__users__panel">
            <p className="stored__users__text">
                You choosed {users.length} users
            </p>
            <div className="stored__users__btns">
                <button className="stored__users__btn stored__users__download">
                    Download
                </button>
                <button className="stored__users__btn stored__users__clear" onClick={handleClear}>
                    Unselect all
                </button>
            </div>

        </div>
    );
}

export default StoredUsersButton;
