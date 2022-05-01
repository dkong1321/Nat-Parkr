const { useEffect, useState } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { getImages } = require("../../store/image");
// add in

const ImageBrowser = ()=>{

    const images = Object.values(useSelector(state => state.images));
    // console.log("my collection of images", state.images)
    console.log("keys of images", images)
    // const imageKeys  = Object.keys(images.images)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getImages())
    }, [dispatch])

    if(!images){
        return null
    }

    return (
        <div>
            <h1>Hello</h1>
            {images.map((image)=>{
            return(
                <div>
                    <div>{image.title}</div>
                    <img src={`/api/images/${image.imageURL}`}></img>
                </div>
                )
            })
        }
        </div>
    )
}

export default ImageBrowser;
