import './imageCard.css'
import style from './imageCard.css'
import {Link, useHistory} from "react-router-dom"
import { deleteImage } from '../../store/image';
const { useDispatch, useSelector } = require("react-redux");

function ImageCard({image}) {

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user);

    const deleteImageCard = ()=>{
        dispatch(deleteImage(image.id))
    }

    // const redirectFunc = (e)=>{
    //     history.push("/editimage")
    // }
    return(
        <div>
            <h3>{image.title}</h3>
            <div>{image.userId}</div>
            <div>{image.id}</div>
            <div className={style.test}>{image.description}</div>
            <img className='imageShow' src={`${image.imageURL}`}></img>
            { (user.id === image.userId) ? <Link to={`/editimage/${image.id}`}><button>Edit</button></Link> :<></>}
            { (user.id === image.userId) ? <button onClick={deleteImageCard}>Delete</button> : <></>}
        </div>
    )
}

export default ImageCard
