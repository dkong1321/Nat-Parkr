const { useEffect, useState } = require("react");
const { useDispatch, useSelector } = require("react-redux");
const { getImages } = require("../../store/image");
// add in

const ImageBrowser = ()=>{

    const images = Object.values(useSelector(state => state.images));

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
                    <div>{image.description}</div>
                    <img src={`${image.imageURL}`}></img>
                </div>
                )
            })
            }
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpaper.nu%2Fwp-content%2Fuploads%2F2015%2F02%2FFunny-Cat-Hidden.jpg&f=1&nofb=1"></img>
        </div>
    )
}

export default ImageBrowser;
