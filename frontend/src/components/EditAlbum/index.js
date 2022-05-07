import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { deleteAlbumImage, deleteAlbums, editAlbum, getAlbums } from "../../store/album"
import {useState} from 'react'
function EditAlbum(){
    const {albumId} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const albums = Object.values(useSelector(state => state.albums))
    const myAlbum = albums.filter((album)=> album.id === +albumId )[0]
    const [errors, setErrors] = useState()
    const [title, setTitle] = useState()

    const deleteMyAlbum = () =>{
        dispatch(deleteAlbums(albumId))
        history.push('/albums')
    }

    const removeImageCard = (image)=>{
        const payload = {albumId, image}
        dispatch(deleteAlbumImage(payload))
        .then(() => dispatch(getAlbums()))
    }

    const editAlbumTitle = async(event) =>{
        event.preventDefault();
        setErrors([])
        const data = {title, albumId}
        await dispatch(editAlbum(data))
        .catch(
            async (res) => {
                const data = await res.json();
                if(data && data.errors) setErrors(data.errors);
            }
        )
        dispatch(getAlbums())
        history.push('/albums')
    }
    return (
        <div>
            <h1>hello</h1>
            <h1>{albumId}</h1>
            <form onSubmit={editAlbumTitle}>
                <ul>
                    {errors?.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <input  value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title'></input>
                <button type="submit">Submit New Title</button>
            </form>
            {myAlbum.Images.map((image)=>{
                return (
                    <div className='album_image_container'>
                        <h1>{image.title}</h1>
                        <div className="album_image_overlay">
                            <button className='album_image_button' onClick={(e)=>removeImageCard(image)}>Remove from Album</button>
                        </div>
                        <img className='album_image_show' src={`${image.imageURL}`}></img>
                    </div>
                )
            })}
            <button onClick={deleteMyAlbum}>Delete Album</button>

        </div>
    )
}

export default EditAlbum
