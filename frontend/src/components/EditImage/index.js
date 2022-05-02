import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editImage } from '../../store/image';


function EditImage(id){
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
        const result = await dispatch(editImage(data))
        console.log(result)
    }

    const deleteImage = async()=>{
    const imageId = 23
    await dispatch(deleteImage(imageId))
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
            <button onClick={deleteImage}>Delete</button>
        </div>
    )
}

export default EditImage
