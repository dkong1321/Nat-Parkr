import './ShowImage.css'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { useState } from 'react';
import { getAlbums, postAlbumImage } from '../../store/album';
import ShowComments from './Comment';
import CreateAlbumModal from '../Modals/CreateModalAlbum';

function ShowImage () {
    const {imageId} = useParams()
    const user = useSelector(state => state.session.user)
    const images = Object.values(useSelector(state => state.images));
    const myImage = images.filter(image=> {return image.id === +imageId})[0]

    const albums = Object.values(useSelector(state => state.albums))
    const currentUserAlbums = albums.filter((album)=>album.userId === user.id)
    const [albumId, setAlbumId] = useState(null)
    const dispatch = useDispatch()

    // const comments = Object.values(useSelector(state => state.comments))
    // const currentImageComments = comments.filter((comment)=>comment.imageId===myImage.id)

    const addAlbum = (event) => {
        event.preventDefault()
        const data = {albumId, imageId}
        dispatch(postAlbumImage(data))
        .then(() => dispatch(getAlbums()))
        alert(`Added to your album!`)
    }

    return (
        <div className='view_image_body'>

            <div className='view_image_container'>
                <div>
                    <div className='view_image_title'>{myImage.title}</div>
                    {currentUserAlbums.length ?
                    <form onSubmit ={addAlbum}>
                    <select onChange={e=> setAlbumId(e.target.value)}>
                        <option value={null}>Add to Albums</option>
                        {currentUserAlbums.map((album)=>{
                            return(<option key={album.id} value={album.id}>{album.title}</option>)
                        })}
                    </select>
                    <button type="submit"><i class="fa-solid fa-plus"></i></button>
                    </form>
                    : user?<CreateAlbumModal user={user} />:<></>}
                    <img className="view_image" src={`${myImage.imageURL}`} alt={myImage.title}></img>
                    <div>{`Submitted by ${myImage.User?.username} `}</div>
                    <div className='show_image_description'>{myImage.description}</div>
                </div>

                <ShowComments myImage={myImage}></ShowComments>
            </div>

        </div>

    )
}

export default ShowImage
