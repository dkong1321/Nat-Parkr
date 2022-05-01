import {useState} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';


// import './test.css'

async function postImage({image, description, userId, title}) {
    const formData = new FormData();
    formData.append("image", image)
    formData.append("description", description)
    formData.append("userId", userId)
    formData.append("title", title)
    const result = await axios.post('/api/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    return result.data
}

async function findImages(userId){
    const images = await axios.get('/api/images')
    console.log(images)
}

function Test(){
    const [file,setFile] = useState()
    const [description, setDescription] = useState("")
    const [images, setImages] = useState([])
    const [title, setTitle] = useState("")
    const user = useSelector(state => state.session.user);
    const userId = user.id

    const submit = async event =>{
        event.preventDefault()
        const result = await postImage({image: file, description, userId, title})
        // setImages([result.image, ...images])
        const images = findImages(userId)
    }

    const fileSelected = event => {
        const file = event.target.files[0]
        setFile(file)
    }

    return (
        <div className="test">
            <form onSubmit ={submit}>
                <input onChange={fileSelected} type="file" accept="image/*" name="image"></input>
                <input value={title} onChange={e=> setTitle(e.target.value)} type="text" placeholder='title'></input>
                <input value={description} onChange={e=> setDescription(e.target.value)} type="text" placeholder='description'></input>
                <button type="submit">Submit</button>
            </form>
            {images.map( image => (
                <div key={image}>
                    <img src={image}></img>
                </div>
            ))}
            {/* <img src="/api/images/25167349639f900d1f7177c0d4f04bf0"></img> */}
        </div>
    )
}

export default Test;
