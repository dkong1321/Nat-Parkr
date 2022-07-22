import './ShowImage.css'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom"
import { useState } from 'react';
import { getAlbums, postAlbumImage } from '../../store/album';
import ShowComments from './Comment';
import CreateAlbumModal from '../Modals/CreateModalAlbum';
import moment from "moment"
import ImageZoomModal from '../Modals/ZoomModal';
import CommentModal from '../Modals/CommentModal';

function ShowImage () {
    const {imageId} = useParams()
    const user = useSelector(state => state.session.user)
    const images = Object.values(useSelector(state => state.images));
    const comments = Object.values(useSelector(state=>state.comments));
    const myImage = images.filter(image=> {return image.id === +imageId})[0]
    const myComments = comments.filter(comment=> {return comment.id === myImage.id})
    const history = useHistory()
    console.log(myComments)
    const albums = Object.values(useSelector(state => state.albums))
    const currentUserAlbums = albums.filter((album)=>album.userId === user.id)
    const [albumId, setAlbumId] = useState(null)
    const dispatch = useDispatch()

    const addAlbum = (event) => {
        event.preventDefault()
        const data = {albumId, imageId}
        dispatch(postAlbumImage(data))
        .then(() => dispatch(getAlbums()))
        .then(()=>history.push("/albums"))

    }

    return (
        <div className='view_image_main_container'>
        <div className='view_image_body'>
                <div>
                <div className='view_image_container'>
                    {/* <img className="view_image" src={`${myImage.imageURL}`} alt={myImage.title}></img> */}
                    <ImageZoomModal myImage={myImage}/>
                </div>
                {/* <div className='view_image_side_bar'>
                    <div className='heading_description'>Description:</div>
                    <div className='view_image_description'>
                    {myImage.description}
                    </div>
                    <div className='view_image_comment_container'>
                    <ShowComments myImage={myImage}></ShowComments>
                    </div>
                </div> */}
            </div>
        </div>
        <div className='image_info_container'>
            <div className='image_info_top'>
                <div className='view_image_title'>{myImage.title}</div>
                <div>
                    <div>
                    <div className='image_info'>{`Submitted by: ${myImage.User?.username}`}</div>
                    <div className='image_info'>{moment(myImage.createdAt).format("MMM D YYYY")}</div>
                    {
                    currentUserAlbums.length ?
                    <form onSubmit ={addAlbum}>
                        <div className='add_album_info'>
                            <select onChange={e=> setAlbumId(e.target.value)} className="add_album_form">
                                <option value={null}>Add to Albums</option>
                                {currentUserAlbums.map((album)=>{
                                    return(<option key={album.id} value={album.id}>{album.title}</option>)
                                })}
                            </select>
                            <button className='album_plus_button' type="submit">+</button>
                        </div>
                    </form>
                    : user?<CreateAlbumModal user={user} />:<></>
                    }
                    </div>
                </div>
                <div className='view_image_description'>
                    {myImage.description}
                </div>
                <CommentModal myImage={myImage} myComments />
                </div>
        </div>
    </div>
    )
}

export default ShowImage
