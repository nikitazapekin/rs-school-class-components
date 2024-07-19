
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