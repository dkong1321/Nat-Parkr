import './AlbumImageCard.css'
import {Link, useHistory} from "react-router-dom"
import { deleteImage } from '../../store/image';
import { getAlbums } from '../../store/album';


const { useDispatch, useSelector } = require("react-redux");

function AlbumImageCards({image}) {

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user);

    const deleteImageCard = (e)=>{
        e.stopPropogation()
        dispatch(deleteImage(image.id))
        .then(() => dispatch(getAlbums()))
    }


    const edit = () => {
        history.push(`/editimage/${image.id}`)
    }

    return(

        <div className='album_image_container'>
            <div className="album_image_overlay">
                { (user.id === image.userId) ? <button className='album_image_button' onClick={edit}>Edit</button> :<></>}
                { (user.id === image.userId) ? <button className='album_image_button' onClick={deleteImageCard}>Delete</button> : <></>}
            </div>
            <img className='album_image_show' src={`${image.imageURL}`}></img>
        </div>
    )
}

export default AlbumImageCards
