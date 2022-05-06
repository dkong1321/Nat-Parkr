import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getAlbums } from '../../store/album';
import { deleteImage, editImage } from '../../store/image';

function EditImageCard(){
    const {imageId} = useParams()

    const image = useSelector(state=> state.images[imageId])
    const user = useSelector(state => state.session.user);
    const albums = Object.values(useSelector(state => state.albums))
    const currentUserAlbums = albums.filter((album)=>album.userId === user.id)
    const [title, setTitle] = useState(image.title)
    const [description, setDescription] = useState(image.description)
    const [albumId, setAlbumId] = useState()
    const history = useHistory()
    const dispatch = useDispatch()

    const submitEdit = async(event)=>{
        event.preventDefault();
        const locationId =1
        const data = {title,description,imageId,locationId}
        await dispatch(editImage(data)).then(()=> dispatch(getAlbums()))
        history.push('/myimages')
    }

    return (
        <div>
            <div>Edit Image</div>
            <div>{`Hello ${user.username} what would you like to edit on this image`}</div>
            <form onSubmit = {submitEdit}>
                <input required value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title'></input>
                <input required value={description} onChange={e=> setDescription(e.target.value)} type="text" placeholder='description'></input>
                <button type="submit">Edit</button>
            </form>
            <Link to={`/myimages`}><button>Cancel</button></Link>

            {/* <button onClick={deleteImage}>Delete</button> */}
        </div>
    )
}

export default EditImageCard
