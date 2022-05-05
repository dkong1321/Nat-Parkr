import './imageCard.css'
import { Link } from "react-router-dom"

function ImageCard({image}) {
    return(
        <div>
            <Link to={`/images/${image.id}`}><img className='image_show' src={`${image.imageURL}`}></img></Link>
        </div>
    )
}

export default ImageCard
