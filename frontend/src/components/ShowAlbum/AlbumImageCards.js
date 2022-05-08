import { Link } from 'react-router-dom'
import './AlbumImageCard.css'

function AlbumImageCards({image}) {

    return(
        <div className='album_image_container'>
            <div>
                <Link to={`/images/${image.id}`} >
                    <img className='album_image_show' src={`${image.imageURL}`}></img>
                </Link>
            </div>
        </div>
    )
}

export default AlbumImageCards
