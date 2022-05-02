import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postImage } from '..//../store/image';

function CreateImage(){
    const [image,setImage] = useState()
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const user = useSelector(state => state.session.user);
    const userId = user.id
    const dispatch = useDispatch();

    const submit = async(event) =>{
        event.preventDefault()
        const data = {image, description,userId,title}
        const result = await dispatch(postImage(data))
        console.log(result)

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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateImage;
