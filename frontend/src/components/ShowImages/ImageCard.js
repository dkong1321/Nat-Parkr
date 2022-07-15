import './imageCard.css'
import { Link } from "react-router-dom"

function ImageCard({image}) {
    return(
        <div>
            <Link to={`/images/${image.id}`}></Link>
        </div>
    )
}

export default ImageCard
