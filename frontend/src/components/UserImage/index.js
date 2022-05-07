import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getAlbums } from "../../store/album"
import { deleteImage } from "../../store/image"
import EditImageModal from "../Modals/EditModalImage"

import "./UserImage.css"
function UserImage () {
    const user = useSelector(state =>state.session.user)
    const images = Object.values(useSelector(state => state.images))
    const currentUserImages = images.filter((image)=> image.userId === user.id)

    const dispatch = useDispatch()

    const deleteImageCard = (image)=>{
        dispatch(deleteImage(image.id))
        .then(() => dispatch(getAlbums()))

    }
    return(
        <div className="user_image_container">
            <h1>hELLO</h1>
            <h3 className="test">{user.username} Photos</h3>
            <div>
                {currentUserImages.map((image=>{
                return(
                    <div>
                        <h3>{image.title}</h3>
                        <Link to={`/images/${image.id}`}><img className='imageShow' src={`${image.imageURL}`}></img></Link>
                        {/* <FontAwesomeIcon icon="fa-thin fa-trash-can" /> */}
                        <button>
                        <i className="fas fa-user-circle" />
                        </button>
                        <i className="fas fa-user-circle" />
                        <i class="fa-regular fa-trash-can"></i>
                        <i className="fa-thin fa-trash-can"></i>

                        <i class="fa-thin fa-face-icicles"></i>
                        { (user.id === image.userId) ? <button onClick={()=>deleteImageCard(image)}><i class="fa-solid fa-trash-can"></i></button> : <></>}
                        { (user.id === image.userId) ? <Link to={`/editimage/${image.id}`}><button>Edit</button></Link> :<></>}
                    </div>
                    )
            }))}
            </div>

        </div>


    )
}

export default UserImage
