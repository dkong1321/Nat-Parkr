import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getAlbums, postAlbums } from '../../store/album'
import "./CreateAlbum.css"

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
        <div className='add_album_form_container'>
            <div className='form_title'>Add an Album</div>
                <div className='error_list'>
                    <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                    </ul>
                </div>
            <form onSubmit ={submit} className="test">
                <input required value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title'></input>
                <button type="submit" className='button_reg'>Submit</button>
                <button onClick={e => setShowModal(false)} className='button_reg'>Cancel</button>
            </form>
        </div>

    )
}

export default CreateAlbum
