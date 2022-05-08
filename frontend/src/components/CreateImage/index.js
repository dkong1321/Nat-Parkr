import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAlbums } from '../../store/album';
import { getImages, postImage } from '..//../store/image';
import "./CreateImage.css"

function CreateImage({setShowModal}){
    const user = useSelector(state => state.session.user);
    const albums = Object.values(useSelector(state => state.albums))
    const currentUserAlbums = albums.filter((album) => album.userId === user.id)

    const history = useHistory()
    const [image,setImage] = useState()
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const [albumId, setAlbumId] = useState(null)
    const userId = user.id
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    //for modal


    const submit = async(event) =>{
        event.preventDefault()
        setErrors([])
        const data = {image, description,userId,title, albumId}
        const newImage = await dispatch(postImage(data)).then(()=> dispatch(getAlbums()))
        .catch (
            async (res) => {
                const data = await res.json();
                if(data && data.errors) setErrors(data.errors);
            }
        )

        if(newImage) {
            history.push('/images');
            setShowModal(false)
            dispatch(getImages())
            setDescription("")
            setTitle("")
            setImage()
        }
    }

    const imageSelected = event => {
        const image = event.target.files[0]
        setImage(image)
    }

    return (
        <div className="create_image_container">
            <div className='form_title'>Add an Image</div>
            <form onSubmit ={submit} className="create_image_form">
                    <div className='error_list'>
                        <ul>
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                    </div>


                <input className="create_image_form_inputs" required onChange={imageSelected} type="file" accept="image/*" name="image"></input>
                <input  className="create_image_form_inputs" value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title'></input>
                <input  className="create_image_form_inputs" value={description} onChange={e=> setDescription(e.target.value)} type="text" placeholder='description'></input>
                <select className="create_image_form_inputs" onChange={e=> setAlbumId(e.target.value)}>
                    <option value={null}>Add to Albums</option>
                    {currentUserAlbums.map((album)=>{
                        return(<option value={album.id}>{album.title}</option>)
                    })}
                </select>
                <button type="submit" className='button_reg' >Submit</button>
                <button onClick={e => setShowModal(false)} className='button_reg'>Cancel</button>
            </form>
        </div>
    )
}

export default CreateImage;
