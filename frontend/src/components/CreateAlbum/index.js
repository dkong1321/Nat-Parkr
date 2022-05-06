import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAlbums, postAlbums } from '../../store/album'

function CreateAlbum({setShowModal}){
    const user = useSelector(state => state.session.user)
    const userId = user.id
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()

    const [errors, setErrors] = useState([]);

    const submit = async(event) => {
        event.preventDefault()
        const data = {title, userId}
        setErrors([])
        const newAlbum = await dispatch(postAlbums(data))
        .then(()=>setShowModal(false))
        .then(()=> dispatch(getAlbums()))
        .catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }

        )


    }
    return (
        <div>
            <h3>Add an Album</h3>
            <form onSubmit ={submit}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <input required value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title'></input>
                <button type="submit">Submit</button>
            </form>
            <button onClick={e => setShowModal(false)}>Cancel</button>
        </div>

    )
}

export default CreateAlbum
