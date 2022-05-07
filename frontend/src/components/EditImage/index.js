import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getAlbums } from '../../store/album';
import { deleteImage, editImage, getImages } from '../../store/image';

function EditImageCard(){
    const {imageId} = useParams()

    const image = useSelector(state=> state.images[imageId])
    const user = useSelector(state => state.session.user);
    const albums = Object.values(useSelector(state => state.albums))
    const [title, setTitle] = useState(image.title)
    const [myUpdatedImage, setMyUpdatedImage] = useState()
    const [description, setDescription] = useState(image.description)
    const history = useHistory()
    const dispatch = useDispatch()

    const [errors, setErrors] = useState([]);

    const submitEdit = async(event)=>{
        event.preventDefault();
        // const locationId =1
        setErrors([])
        const data = {title,description,imageId}
        const newImage = await dispatch(editImage(data))
        .catch (
            async (res) => {
                const data = await res.json();
                console.log(data)
                if(data && data.errors) {
                    setErrors(data.errors);
                }
            }
        )
        console.log(newImage)
        if(newImage) {
                console.log("my errors are here", errors)
                history.push("/myimages")
                dispatch(getAlbums()).then(()=>dispatch(getImages()))

        }
    }

    return (
        <div>
            <div>Edit Image</div>
            <div>{`Hello ${user.username} what would you like to edit on this image`}</div>
            <form onSubmit = {submitEdit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <input  value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title'></input>
                <input  value={description} onChange={e=> setDescription(e.target.value)} type="text" placeholder='description'></input>
                <button type="submit">Submit Your Edit</button>
            </form>
            <Link to={`/myimages`}><button>Cancel</button></Link>

            {/* <button onClick={deleteImage}>Delete</button> */}
        </div>
    )
}

export default EditImageCard
