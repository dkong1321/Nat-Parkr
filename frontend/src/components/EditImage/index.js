import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { deleteImage, editImage } from '../../store/image';

function EditImageCard(id){
    console.log(useParams())
    const {imageId} = useParams()

    const image = useSelector(state=> state.images[imageId])
    const user = useSelector(state => state.session.user);
    const [title, setTitle] = useState(image.title)
    const [description, setDescription] = useState(image.description)
    const dispatch = useDispatch()

    const submitEdit = async(event)=>{
        event.preventDefault();
        const albumId = 1
        const locationId =1
        const data = {title,description,imageId,albumId,locationId}
        console.log(data)
        await dispatch(editImage(data))


    }

    return (
        <div>
            <div>Edit Image</div>
            <div>{`Hello ${user.username} what would you like to edit on this image`}</div>
            <form onSubmit = {submitEdit}>
                <input value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title'></input>
                <input value={description} onChange={e=> setDescription(e.target.value)} type="text" placeholder='description'></input>
                <button type="submit">Edit</button>
            </form>
            <Link to={`/images`}><button>Cancel</button></Link>


            {/* <button onClick={deleteImage}>Delete</button> */}
        </div>
    )
}

export default EditImageCard
