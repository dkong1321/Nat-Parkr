import ImageCard from "./ImageCard";

const { useEffect, useState } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { getImages } = require("../../store/image");
// add in


const ImageBrowser = ()=>{
    const user = useSelector(state => state.session.user);
    const userId = user.id
    const dispatch = useDispatch();
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
