import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAlbums, postAlbums } from '../../store/album'

function CreateAlbum(){
    const user = useSelector(state => state.session.user)
    const userId = user.id
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const submit = async(event) => {
        event.preventDefault()
        const data = {title, userId}
        await dispatch(postAlbums(data))
        .then(()=> dispatch(getAlbums()))
        history.push('/albums')
    }
    return (
        <div>
            <h3>Add an Album</h3>
            <form onSubmit ={submit}>
                <input value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title'></input>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default CreateAlbum
