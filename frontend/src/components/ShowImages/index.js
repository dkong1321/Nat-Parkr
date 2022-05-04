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
            <div className="item__content">
                {images.map((image)=>{
                    return(
                        <ImageCard image={image}></ImageCard>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ImageBrowser;
