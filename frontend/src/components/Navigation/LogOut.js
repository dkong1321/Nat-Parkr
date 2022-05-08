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
        <button onClick={logout} className="button_reg">Sign Out</button>
    )
}

export default LogOut
