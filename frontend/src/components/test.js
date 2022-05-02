import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postImage } from '../store/image';


// import './test.css'

// async function postImage({image, description, userId, title}) {
//     const formData = new FormData();
//     formData.append("image", image)
//     formData.append("description", description)
//     formData.append("userId", userId)
//     formData.append("title", title)
//     const result = await axios.post('/api/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
//     return result.data
// }

// async function findImages(userId){
//     const images = await axios.get('/api/images')
//     console.log(images)
// }

function Test(){
    const [image,setImage] = useState()
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")
    const user = useSelector(state => state.session.user);
    const userId = user.id
    const dispatch = useDispatch();

    const submit = async event =>{
        event.preventDefault()
        const data = {image, description,userId,title}
        const result = await dispatch(postImage(data))
        console.log(result)
        // setImages([result.image, ...images])
        // const images = findImages(userId)
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

            {/* <img src="/api/images/25167349639f900d1f7177c0d4f04bf0"></img> */}
        </div>
    )
}

export default Test;
