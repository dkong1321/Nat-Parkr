import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CreateAlbumModal from '../Modals/CreateModalAlbum';

import AlbumImageCards from "./AlbumImageCards"

const AlbumBrowser = () => {
    const albums = Object.values(useSelector(state => state.albums))
    const user = useSelector(state => state.session.user)
    const currentUsersAlbums = albums.filter((album)=> album.userId === user.id)

    return(
        <div className="main_album_container">
            <h1 className="main_page_title">Albums</h1>
            <div className="my_albums_container">
            <CreateAlbumModal className="dropdown_buttons" user={user} />
                {currentUsersAlbums.map(album=>{
                    return(
                        // <div key={album.id} className="my_album_container">
                        //         <div className="my_album_title_container">
                        //             {album.Images?.length > 0 ?
                        //             <>
                        //                 <img className='album_profile_image' src={`${album.Images[0].imageURL}`}></img>
                        //             </>:<></>}
                        //             <h1 className="my_album_title">{album.title}</h1>
                        //             <Link to={`/editalbum/${album.id}`} className="my_album_edit_button"><button><i className="fas fa-edit"></i></button></Link>
                        //         </div>

                        //         {album.Images?.length>0 ?
                        //         <div className="album_link_container">
                        //             {album.Images?.map((image)=>{
                        //                 return(
                        //                         <Link to={`/images/${image.id}`} >
                        //                             <img className='album_image_show' src={`${image.imageURL}`}></img>
                        //                         </Link>
                        //                 )
                        //             })}
                        //         </div>
                        //         : <div className="my_album_title">Add an Image in this Album to Edit Images</div>}
                        // </div>
                        <AlbumImageCards album={album} />
                    )

                })}
            </div>


        </div>
    )

}
export default AlbumBrowser
