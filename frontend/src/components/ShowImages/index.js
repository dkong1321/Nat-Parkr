import { useReducer } from "react";
import ImageCard from "./ImageCard";
import { useHistory } from "react-router-dom";
import './imageCard.css'

const { useSelector } = require("react-redux");

// add in


const ImageBrowser = ()=>{
    const user = (useSelector(state => state.session.user))
    const images = Object.values(useSelector(state => state.images));
    const history = useHistory()
    const revImages = images.reverse()
    if(!images){
        return null
    }

    // function shuffleArray(array) {
    //     for (let i = array.length -1; i>0; i--){
    //         const j = Math.floor(Math.random() * (i+1));
    //         [array[i], array[j]] = [array[j], array[i]]
    //     }
    //     return array
    // }

    const imageLink = (imageId) => {
        history.push(`/images/${imageId}`)
    }

    return (
        <div className="main_splash_container">
            <div className="welcome_text">Welcome {user.username}</div>
        <div className="masonary">
                {revImages.map((image)=>{
                    return(
                        <div key={image.id} className="image_container">
                            <img onClick={e=>imageLink(image.id)}className='image_show' src={`${image.imageURL}`}></img>
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
