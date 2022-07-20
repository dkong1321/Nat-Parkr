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
            <div className="add_album_button_container">
                <CreateAlbumModal user={user} />
            </div>
                {currentUsersAlbums.map(album=>{
                    return(
                        <AlbumImageCards album={album} />
                    )

                })}
            </div>


        </div>
    )

}
export default AlbumBrowser
