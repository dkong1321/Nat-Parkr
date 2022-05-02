import { csrfFetch } from '../../store/csrf';
import './imageCard.css'
import style from './imageCard.css'
import {Link, useHistory} from "react-router-dom"
import EditPage from "../EditImage"
const { useDispatch, useSelector } = require("react-redux");
function ImageCard({image}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user);
    console.log("image userid",image.userId)
    console.log("current user id",user.id)
    const deleteImage = async()=>{
        console.log(image.id)
            const response = await csrfFetch(`api/images/${image.id}`,{
            method: 'DELETE'
        });

        // if(response.ok){
        //     dispatch(deleteImage(image.id))
        // }

        // await dispatch(deleteImage(image.id))
    }

    const redirectFunc = (e)=>{
        history.push("/editimage")
    }
    return(
        <div>

            <h1>{image.title}</h1>
            <div>{image.userId}</div>
            <div>{image.id}</div>
            <div className={style.test}>{image.description}</div>
            <img className='imageShow' src={`${image.imageURL}`}></img>
            { (user.id === image.userId) ? <button onClick={deleteImage}>Delete</button> : <></>}
            {/* {user.id ===image.userId ? <button onClick={redirectFunc}>Edit</button>:<></>} */}
            <Link to={`/editimage/${image.id}`}>
                <button>Edit</button>
            </Link>
        </div>
    )
}

export default ImageCard
