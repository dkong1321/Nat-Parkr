import { useState } from 'react'
import { Link } from 'react-router-dom'
import './AlbumImageCard.css'

function AlbumImageCards({album}) {

    return(
        <div key={album.id} className="my_album_container">
                                <div className="my_album_title_container">
                                    {album.Images?.length > 0 ?
                                        <>
                                            <img className='album_profile_image' src={`${album.Images[0].imageURL}`}></img>
                                        </>:
                                        <></>
                                    }
                                    <h1 className="my_album_title">{album.title}</h1>
                                    <Link to={`/editalbum/${album.id}`} className="my_album_edit_button"><i className="fa-solid fa-gear"></i></Link>
                                </div>
                                    <>
                                        {album.Images?.length>0 ?
                                        <div className="album_link_container">
                                            {album.Images?.map((image)=>{
                                                return(
                                                    <Link to={`/images/${image.id}`} >
                                                        <img className='album_image_show' src={`${image.imageURL}`}></img>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                        : <div className="my_album_title">Add an Image in this Album to Edit Images</div>}
                                    </>

                        </div>
    )
}

export default AlbumImageCards
