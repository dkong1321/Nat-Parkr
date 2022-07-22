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
    if(!images){
        return null
    }

    function shuffleArray(array) {
        for (let i = array.length -1; i>0; i--){
            const j = Math.floor(Math.random() * (i+1));
            [array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    const imageLink = (imageId) => {
        history.push(`/images/${imageId}`)
    }

    const randNum = (image) => {
        const myNum = Math.floor(Math.random()*15)
        if(myNum === 13 || myNum === 14){
            return (
                <div key={image.id} className="image_container big">
                    <img onClick={e=>imageLink(image.id)} className='image_show' src={`${image.imageURL}`}></img>
                        <div className='image_card_title title_big'>{image.title}</div>
                </div>
            )

        } else if (myNum === 10 || myNum === 11){
            return (
                <div key={image.id} className="image_container big">
                    <img onClick={e=>imageLink(image.id)} className='image_show' src={`${image.imageURL}`}></img>
                        <div className='image_card_title title_big'> {image.title}</div>
                </div>
            )
        } else if (myNum === 9 || myNum === 3 || myNum === 5) {
            return (
                <div key={image.id} className="image_container tall">
                    <img onClick={e=>imageLink(image.id)} className='image_show' src={`${image.imageURL}`}></img>
                    <div className='image_card_title'> {image.title}</div>
                </div>
            )
        }

        else {
            return (
                <div key={image.id} className="image_container">
                    <img onClick={e=>imageLink(image.id)} className='image_show' src={`${image.imageURL}`}></img>
                        <div className='image_card_title'>{image.title}</div>
                </div>
            )
        }
    }

    return (
        <div className="main_splash_container">
            <div className="welcome_text">Welcome {user.username}</div>
        <div className="masonary">
                {shuffleArray(images).map((image)=>{
                    return(
                        <>
                            {randNum(image)}
                        </>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default ImageBrowser;
