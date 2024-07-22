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
const StoredUsersButton = () => {
    const dispatch = useAppDispatch()
    const handleOpen = () => {
        dispatch(OpenModalActionCreator())
    }


    const handleClear = ()=> {
        dispatch(clearStoredElementsActionCreator())
      //  handleClose()
    }
    return (
        <div className="stored__users__panel">
            <p className="stored__users__text">

                You choosed ...
            </p>
            <button className="stored__users__download">
                Download all
            </button>
            <button className="stored__users__clear" onClick={handleClear}>
                Clear all
            </button>
            <button onClick={handleOpen}>
                Info about cards
            </button>
        </div>
    );
}

export default StoredUsersButton;