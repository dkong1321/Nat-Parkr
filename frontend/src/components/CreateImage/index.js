import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAlbums } from '../../store/album';
import { load, postImage } from '..//../store/image';

function CreateImage(){
    const user = useSelector(state => state.session.user);
    const albums = Object.values(useSelector(state => state.albums))
    const currentUserAlbums = albums.filter((album) => album.userId === user.id)

    const [image,setImage] = useState()
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const [albumId, setAlbumId] = useState()
    const userId = user.id
    const dispatch = useDispatch();
    const submit = async(event) =>{
        event.preventDefault()
        console.log(albumId)

        const data = {image, description,userId,title, albumId}
        await dispatch(postImage(data)).then(()=> dispatch(getAlbums()))

        // take out to mass seed
        setDescription("")
        setTitle("")
        setImage()
    }

    const imageSelected = event => {
        const image = event.target.files[0]
        setImage(image)
    }

    return (
        <div className="test">

            <div>add a new image</div>
            <form onSubmit ={submit}>
                <input onChange={imageSelected} type="file" accept="image/*" name="image"></input>
                <input value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title'></input>
                <input value={description} onChange={e=> setDescription(e.target.value)} type="text" placeholder='description'></input>
                <select onChange={e=> setAlbumId(e.target.value)}>
                    <option value="">Add to Albums</option>
                    {currentUserAlbums.map((album)=>{
                        return(<option value={album.id}>{album.title}</option>)
                    })}
                </select>
                <button type="submit">Submit</button>
            </form>
            <Link to={`/images`}><button>Cancel</button></Link>
        </div>
    )
}

export default CreateImage;
