import { useReducer } from "react";
import ImageCard from "./ImageCard";
import './imageCard.css'

const { useSelector } = require("react-redux");

// add in


const ImageBrowser = ()=>{
    const user = (useSelector(state => state.session.user))
    const images = Object.values(useSelector(state => state.images));
    const revImages = images.reverse()
    if(!images){
        return null
    }

    return (
        <div className="main_splash_container">
            <div className="welcome_text">Welcome {user.username}</div>
        <div className="masonary">

            <div className="item_content">
                {revImages.map((image)=>{
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
        </div>

    )
}

export default ImageBrowser;
