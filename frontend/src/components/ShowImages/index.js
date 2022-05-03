import ImageCard from "./ImageCard";

const { useSelector } = require("react-redux");

// add in


const ImageBrowser = ()=>{

    const images = Object.values(useSelector(state => state.images));

    if(!images){
        return null
    }

    return (
        <div>
            {images.map((image)=>{
                return(
                    <ImageCard image={image}></ImageCard>
                    )
                })
            }
        </div>
    )
}

export default ImageBrowser;
