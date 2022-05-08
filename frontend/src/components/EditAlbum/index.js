import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { deleteAlbumImage, deleteAlbums, editAlbum, getAlbums } from "../../store/album"
import {useState} from 'react'
import './EditAlbum.css'

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
        const newAlbumTitle = await dispatch(editAlbum(data))
        .catch(
            async (res) => {
                const data = await res.json();
                if(data && data.errors) setErrors(data.errors);
            }
        )
        if(newAlbumTitle){
            dispatch(getAlbums())
            history.push('/albums')
        }
    }

    const cancel = ()=>{
        history.push('/albums')
    }
    return (
        <div className="my_edit_album_container">
            <div className="my_edit_album_title_container">
                <h1 className="my_edit_album_title">Editing {myAlbum.title}</h1>
                <form onSubmit={editAlbumTitle}>
                    <ul>
                        {errors?.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                    <input  value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder={myAlbum.title}></input>
                    <button type="submit">Submit New Title</button>
                </form>
            </div>
            <div className="my_edit_album_image_container">
                {myAlbum.Images.map((image)=>{
                    return (
                        <div className='album_image_container'>
                            <div className="album_image_overlay">
                                <button className='album_image_button' onClick={(e)=>removeImageCard(image)}><i class="fa-solid fa-trash-can"></i></button>
                            </div>
                            <img className='album_image_show' src={`${image.imageURL}`}></img>
                        </div>
                    )
                })}
            </div>
            <button onClick={deleteMyAlbum} className='button_reg'>Delete Album</button>
            <button onClick={cancel} className='button_reg'>Return to Albums</button>
        </div>
    )
}

export default EditAlbum
