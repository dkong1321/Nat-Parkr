import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function LogOut ({}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout())
        history.push('/')
    };

    return (
        <div onClick={logout} className="dropdown_buttons">Sign Out</div>
    )
}

export default LogOut
