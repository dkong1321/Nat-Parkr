const { useEffect, useState } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { getImages } = require("../../store/image");
// add in

const ImageBrowser = ()=>{

    const images = useSelector(state => state.images);
    const imageKeys  = Object.keys(images.images)
    const allImages = images.images


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getImages())
    }, [dispatch])

    if(!images){
        return null
    }

    // console.log(Object.keys(images.images))
    // const imageKeys  = Object.keys(images.images)
    // console.log(imageKeys)
    // const allImages = images.images
    // console.log("========----",allImages[imageKeys[0]].title)

    return (
        <main>
            <h1>Hello</h1>
            {imageKeys.map(id=>{
                return (
                    <div>
                        <div>{allImages[imageKeys[id]].title}</div>
                        <img src={`/api/images/${allImages[imageKeys[id]].imageURL}`}></img>
                    </div>
                    )
                })}
        </main>
    )
}

export default ImageBrowser;
