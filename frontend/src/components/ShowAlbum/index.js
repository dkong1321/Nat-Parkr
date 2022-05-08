import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import AlbumImageCards from "./AlbumImageCards"

const AlbumBrowser = () => {
    const albums = Object.values(useSelector(state => state.albums))
    const user = useSelector(state => state.session.user)
    const currentUsersAlbums = albums.filter((album)=> album.userId === user.id)

    // const deleteAlbumCard = (id) => {
    //     dispatch(deleteAlbums(id))
    // }

    return(
        <div>
            <h1 className="main_page_title">Albums</h1>
            <div className="my_albums_container">
            {currentUsersAlbums.map(album=>{
                return(
                    <div key={album.id}>
                        <Link to={`/editalbum/${album.id}`} className="my_album_edit_button"><button><i class="fas fa-edit"></i></button></Link>
                        <div className="my_album_container">
                            <div className="my_album_title_container">
                                <h1 className="my_album_title">{album.title}</h1>
                            </div>

                            {album.Images?.length>0 ?
                            <div className="album_card_container">
                                {album.Images?.map((image)=>{
                                    return(
                                        <div>
                                            <AlbumImageCards image={image}></AlbumImageCards>
                                        </div>
                                    )
                                })}
                            </div>
                            : <div className="my_album_title">Add an Image in this Album to Edit Images</div>}
                        </div>
                    </div>
                )

            })}

            </div>

        </div>
    )

}
export default AlbumBrowser
