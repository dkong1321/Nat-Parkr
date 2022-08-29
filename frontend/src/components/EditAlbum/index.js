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
    const [title, setTitle] = useState(myAlbum.title)

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
        <div className="main_page_container">
            <div className="my_edit_album_container">
                <div className="my_edit_album_title_container">
                    <div className="return_albums">
                        <button onClick={cancel} className='button_reg'>Return to Albums</button>
                    </div>
                    <div className="my_edit_album_title">Editing {myAlbum.title}</div>
                    <form className = "edit_album_form" onSubmit={editAlbumTitle}>
                        <ul>
                            {errors?.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                        <label className="edit_album_label">Album Title</label>
                        <input className="edit_album_title_input" value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder={myAlbum.title}></input>
                        <button type="submit" className="submit_album_title">Submit Album Title</button>
                    </form>

                    <div className="return_albums">
                        <button onClick={deleteMyAlbum} className='button_reg'><i className="fa-solid fa-trash-can"></i> Delete Album</button>
                    </div>
                </div>
                <div className="my_edit_album_image_container">
                    {myAlbum.Images.map((image)=>{
                        return (
                            <div className="test_holder">
                                <div className='album_delete_image' onClick={(e)=>removeImageCard(image)}><i className="fa-solid fa-x"></i></div>
                                <img className='edit_album_image_show' src={`${image.imageURL}`}></img>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default EditAlbum
