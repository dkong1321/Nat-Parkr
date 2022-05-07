import './AlbumImageCard.css'

function AlbumImageCards({image}) {

    return(
        <div className='album_image_container'>
            <img className='album_image_show' src={`${image.imageURL}`}></img>
        </div>
    )
}

export default AlbumImageCards
