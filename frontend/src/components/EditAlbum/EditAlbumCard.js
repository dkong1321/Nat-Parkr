import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { deleteAlbumImage, deleteAlbums, getAlbums } from "../../store/album"

function EditAlbumCard({image}){
    const {albumId} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const albums = Object.values(useSelector(state => state.albums))
    const myAlbum = albums.filter((album)=> album.id === +albumId )[0]
    const deleteMyAlbum = () =>{
        dispatch(deleteAlbums(albumId))
        history.push('/albums')
    }

    const removeImageCard = ()=>{
        dispatch(deleteAlbumImage(albumId))
        .then(() => dispatch(getAlbums()))
    }
    return (
        <div>
            <h1>hello</h1>
            <h1>{albumId}</h1>
            {myAlbum.Images.map((image)=>{
                return (
                    <div className='album_image_container'>
                        <h1>{image.title}</h1>
                        <div className="album_image_overlay">
                            <button className='album_image_button' onClick={removeImageCard}>Remove from Album</button>
                        </div>
                        <img className='album_image_show' src={`${image.imageURL}`}></img>
                    </div>
                )
            })}
            <button onClick={deleteMyAlbum}>Delete Album</button>

        </div>
    )
}

// export default EditAlbum
