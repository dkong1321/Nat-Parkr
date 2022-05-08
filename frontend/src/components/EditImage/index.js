import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getAlbums } from '../../store/album';
import { editImage, getImages } from '../../store/image';
import './EditImage.css'

function EditImageCard(){
    const {imageId} = useParams()

    const image = useSelector(state=> state.images[imageId])
    const user = useSelector(state => state.session.user);
    const [title, setTitle] = useState(image.title)
    const [description, setDescription] = useState(image.description)
    const history = useHistory()
    const dispatch = useDispatch()

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

        }
    }

    return (
        <div className='edit_image_container'>
            <div>
                <form onSubmit = {submitEdit} className='form_container'>
                <div className='form_title'>Edit Image</div>
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                    <p>Title</p>
                    <input  value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title'></input>
                    <p>Description</p>
                    <textarea  value={description} onChange={e=> setDescription(e.target.value)} type="textarea" cols="40" rows="5" placeholder='description'></textarea>
                    <button type="submit" className='button_reg'>Submit Your Edit</button>
                    <Link to={`/myimages`} ><button className='button_reg'>Cancel</button></Link>
                </form>
            </div>
        </div>
    )
}

export default EditImageCard
