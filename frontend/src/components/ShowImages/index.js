import ImageCard from "./ImageCard";
import './imageCard.css'

const { useSelector } = require("react-redux");

// add in


const ImageBrowser = ()=>{

    const images = Object.values(useSelector(state => state.images));

    if(!images){
        return null
    }

    return (
        <div className="masonary">
            <div className="item_content">
                {images.map((image)=>{
                    return(
                        <div key={image.id} className="image_container">
                            <ImageCard image={image}></ImageCard>
                            <div classsName='text_overlay'>
                                <div className='image_card_title'>{image.title}</div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageBrowser;
