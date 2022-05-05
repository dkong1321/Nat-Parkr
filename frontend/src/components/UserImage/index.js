import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getAlbums } from "../../store/album"
import { deleteImage } from "../../store/image"

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
        <div>
            <h3>{user.username} Photos</h3>
            {currentUserImages.map((image=>{
                return(
                    <div>
                        <Link to={`/images/${image.id}`}><img className='imageShow' src={`${image.imageURL}`}></img></Link>
                        { (user.id === image.userId) ? <button onClick={()=>deleteImageCard(image)}>Delete</button> : <></>}
                    </div>

                    )
                // { (user.id === image.userId) ? <Link to={`/editimage/${image.id}`}><button>Edit</button></Link> :<></>}
            }))}
        </div>


    )
}

export default UserImage
