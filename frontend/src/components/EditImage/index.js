import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getAlbums } from '../../store/album';
import { editImage, getImages } from '../../store/image';
import { deleteImage } from "../../store/image"

import './EditImage.css'

function EditImageCard({image, setShowModal}){
    // const {imageId} = useParams()

    // const image = useSelector(state=> state.images[imageId])
    // const user = useSelector(state => state.session.user);
    const [title, setTitle] = useState(image.title)
    const [description, setDescription] = useState(image.description)
    const history = useHistory()
    const dispatch = useDispatch()
    const imageId = image.id
    const [errors, setErrors] = useState([]);

    const submitEdit = async(event)=>{
        event.preventDefault();
        setErrors([])
        const data = {title,description,imageId}
        const newImage = await dispatch(editImage(data))
        .catch (
            async (res) => {
                const data = await res.json();
                if(data && data.errors) {
                    setErrors(data.errors);
                }
            }
        )
        if(newImage) {
                history.push("/myimages")
                dispatch(getAlbums()).then(()=>dispatch(getImages()))
                setShowModal(false)
        }
    }

    const deleteImageCard = (image)=>{
        dispatch(deleteImage(image.id))
        .then(() => dispatch(getAlbums()))

    }

    const cancelEdit = () => {
        setShowModal(false)
    }

    return (
        <div className='edit_image_container'>
            <div className='form_title'>Edit Image</div>
            <div className='delete_button_container'>
                <button className='delete_image_button' onClick={()=>deleteImageCard(image)}><i className="fa-solid fa-trash-can"></i></button><></>
            </div>
            <form onSubmit = {submitEdit} className="form_container">
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <div className=''>Title</div>
                <input className='edit_image_inputs' value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title'></input>
                <div>Description</div>
                <textarea className='edit_image_inputs' value={description} onChange={e=> setDescription(e.target.value)} type="textarea" cols="40" rows="5" placeholder='description'></textarea>
                <div className='button_submit_edit'>
                    <button type="submit" className='button_reg'>Submit</button>
                    <Link to={`/myimages`} ><button onClick={e=>cancelEdit()} className='button_reg'>Cancel</button></Link>
                </div>
            </form>
        </div>
    )
}

export default EditImageCard
