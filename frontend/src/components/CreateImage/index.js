import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAlbums } from '../../store/album';
import { getImages, postImage } from '..//../store/image';

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
            // take out to mass seed
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
        <div className="test">

            <h3>Add an Image</h3>
            <form onSubmit ={submit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <input required onChange={imageSelected} type="file" accept="image/*" name="image"></input>
                <input  value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title'></input>
                <input  value={description} onChange={e=> setDescription(e.target.value)} type="text" placeholder='description'></input>
                <select onChange={e=> setAlbumId(e.target.value)}>
                    <option value={null}>Add to Albums</option>
                    {currentUserAlbums.map((album)=>{
                        return(<option value={album.id}>{album.title}</option>)
                    })}
                </select>
                <button type="submit">Submit</button>
            </form>
            <button onClick={e => setShowModal(false)}>Cancel</button>
        </div>
    )
}

export default CreateImage;
