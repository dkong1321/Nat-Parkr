import { useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { deleteAlbums } from "../../store/album"

function EditAlbum(){
    const {albumId} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const deleteMyAlbum = () =>{
        dispatch(deleteAlbums(albumId))

        history.push('/albums')
    }
    return (
        <div>
            <h1>{albumId}</h1>
            <button onClick={deleteMyAlbum}>Delete Album</button>
        </div>
    )
}

export default EditAlbum
