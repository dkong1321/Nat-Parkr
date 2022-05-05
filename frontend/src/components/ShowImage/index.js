import './ShowImage.css'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { useState } from 'react';
import { getAlbums, postAlbumImage } from '../../store/album';

function ShowImage () {
    const {imageId} = useParams()
    console.log(typeof imageId)
    const user = useSelector(state => state.session.user)
    const images = Object.values(useSelector(state => state.images));
    const myImage = images.filter(image=> {return image.id === +imageId})[0]

    const albums = Object.values(useSelector(state => state.albums))
    const currentUserAlbums = albums.filter((album)=>album.userId === user.id)
    const [albumId, setAlbumId] = useState(null)
    const dispatch = useDispatch()
    const addAlbum = (event) => {
        event.preventDefault()
        const data = {albumId, imageId}
        dispatch(postAlbumImage(data))
        .then(() => dispatch(getAlbums()))
    }
    return (
        <div className='my_image_body'>

            <div className='my_image_container'>
                <h3 className='my_image_title'>{myImage.title}</h3>
                <img className="my_image" src={`${myImage.imageURL}`}></img>
                {myImage.userId === user.id ? <h1>hello</h1> : <></>}
                {myImage.userId === user.id ? <h1>hello</h1> : <></>}
                <form onSubmit ={addAlbum}>
                    <select onChange={e=> setAlbumId(e.target.value)}>
                        <option value={null}>Add to Albums</option>
                        {currentUserAlbums.map((album)=>{
                            return(<option value={album.id}>{album.title}</option>)
                        })}
                    </select>
                    <button type="submit">Add to Album</button>
                </form>
            </div>

        </div>

    )
}

export default ShowImage
