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
        <div className="my_image_body">
            <h3 className="main_page_title">{user.username} Images</h3>
            <div className="my_image_container">
                {currentUserImages.map((image=>{
                return(
                    <div>
                        <div className="my_image_cards_container">
                        <div className="my_image_title">{image.title}</div>
                        <div className="my_image_holder">
                            <Link to={`/images/${image.id}`}><img className='my_image_show' src={`${image.imageURL}`}></img></Link>
                            <div className="my_image_button_container">
                                { (user.id === image.userId) ? <button onClick={()=>deleteImageCard(image)}><i className="fa-solid fa-trash-can"></i></button> : <></>}
                                { (user.id === image.userId) ? <Link to={`/editimage/${image.id}`}><button><i className="fas fa-edit"></i></button></Link> :<></>}
                            </div>
                        </div>
                        <div>Description</div>
                        <div className="my_image_descript">{image.description}</div>
                        </div>
                    </div>
                    )
                }))}
            </div>

        </div>


    )
}

export default UserImage
