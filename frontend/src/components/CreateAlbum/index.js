import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAlbums } from '../../store/album'

function CreateAlbum(){
    const user = useSelector(state => state.session.user)
    const userId = user.id
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()

    const submit = async(event) => {
        event.preventDefault()
        const data = {title, userId}
        console.log("data from the compnoent submit",data)
        await dispatch(postAlbums(data))
    }
    return (
        <div>
            <div>hello {user.username}</div>
            <div>Add an Album</div>
            <form onSubmit ={submit}>
                <input value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title'></input>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default CreateAlbum
