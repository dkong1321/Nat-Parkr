import { useDispatch, useSelector } from "react-redux"
import { deleteAlbums } from "../../store/album"
import AlbumImageCards from "./AlbumImageCards"

const AlbumBrowser = () => {
    const albums = Object.values(useSelector(state => state.albums))
    const images = Object.values(useSelector(state => state.images))
    const user = useSelector(state => state.session.user)
    const currentUsersAlbums = albums.filter((album)=>album.userId === user.id)
    const dispatch = useDispatch()

    // const deleteAlbumCard = (id) => {
    //     dispatch(deleteAlbums(id))
    // }

    return(
        <div>
            <h1>Albums</h1>
            {currentUsersAlbums.map(album=>{
                return(
                    <div className="album_card_container">
                        <h1>{album.title}</h1>
                        {album.Images?.map((image)=>{
                            return(
                                <div>
                                    <AlbumImageCards image={image}></AlbumImageCards>
                                </div>
                            )
                        })}
                     {/* <button onClick={deleteAlbumCard(album.id)}>Delete</button> */}
                    </div>

                )

            })}

        </div>
    )

}
export default AlbumBrowser

// return(
                //     <div>
                //         <li>{album.title}</li>
                //         {/* <div>
                //         {(images.filter((image)=>{image.albumId=album.id}))
                //             .map(filteredimage=>{
                //                 return (
                //                     <div>{filteredimage.title}</div>
                //                 )
                //             })}
                //         </div>
                //     </div> */}
                // )}


                //  {
                /*

                map through albums
                    for each album we pass in album to a component(album card)
                        (album card)
                            {key into images and map through images
                            pass in image as a prop to image card
                            }
                */

            /* {albums.map((album)=>{
                return (
                    <div>

                    <div>{album.title}</div>
                    {album.Images}
                    </div>
                ) */

                //  album.Images.length>0 && album.Images.map((image)=>{
                //     console.log("this is in my image map",image)
                // return(
                //     <div>

                //     <h1>hello</h1>
                //     <div>{image.id}</div>
                //     </div>

                // )

                //  })
                //  }


            //     )}
            // }
