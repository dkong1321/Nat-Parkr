import './imageCard.css'
import style from './imageCard.css'
import { Link } from "react-router-dom"
import { deleteImage } from '../../store/image';
import { getAlbums } from '../../store/album';

const { useDispatch, useSelector } = require("react-redux");

function ImageCard({image}) {

    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user);

    const deleteImageCard = ()=>{
        console.log("hello")
        dispatch(deleteImage(image.id))
        .then(() => dispatch(getAlbums()))

    }

    return(
        <div>
            <img className='imageShow' src={`${image.imageURL}`}></img>
            {/* <h3 className='image_card_title'>{image.title}</h3> */}
            {/* <div className={style.test}>{image.description}</div> */}
            {/* { (user.id === image.userId) ? <Link to={`/editimage/${image.id}`}><button>Edit</button></Link> :<></>}
            { (user.id === image.userId) ? <button onClick={deleteImageCard}>Delete</button> : <></>} */}
        </div>
    )
}

export default ImageCard
