import './AlbumImageCard.css'
import {Link, useHistory} from "react-router-dom"
import { deleteAlbumImage, getAlbums } from '../../store/album';

const { useDispatch, useSelector } = require("react-redux");

function AlbumImageCards({image}) {

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user);

    return(
        <div className='album_image_container'>
            <img className='album_image_show' src={`${image.imageURL}`}></img>
        </div>
    )
}

export default AlbumImageCards
