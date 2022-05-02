import { csrfFetch } from "./csrf";
import rfdc from 'rfdc';
const clone = rfdc();

const LOAD = 'images/LOAD';
const ADD = 'images/ADD';

// action creator
export const load = images => {
    return {
    type:LOAD,
    images
    }
}

export const addImage = image => {
    return {
        type:ADD,
        image
    }
}

export const getImages = () => async dispatch => {
    console.log("got to getImages()")
    const response = await csrfFetch('/api/images');
    console.log("here are my images", response)
    if(response.ok) {
        const images = await response.json();
        console.log(images.images)
        dispatch(load(images));
        // return images
    }
    // return response
}

export const postImage = (data) => async dispatch =>{
    const formData = new FormData();
    formData.append("image", data.image)
    formData.append("description", data.description)
    formData.append("userId", data.userId)
    formData.append("title", data.title)
    const response = await csrfFetch('/api/images',{
        method: 'POST',
        headers: {'Content-Type': 'multipart/form-data'},
        body: formData
    })

    if(response.ok){
        const newImage = await response.json();
        console.log(newImage)
        dispatch(addImage(newImage))
    }
}

const initialState = {
    images:{}
}

const imageReducer = (state = initialState, action) =>{
    let newState = clone(state)
    switch(action.type) {
        case LOAD:
            newState = {};
            console.log("=====my actionimages",action.images.images)
            const imageArr = action.images
            imageArr.images.forEach(image=>{
                newState[image.id] = image
            })
            console.log("my new state", newState)
            return newState;
        case ADD:
            newState[action.image.id]=action.image
            return newState
        default:
            return state;
    }
}

export default imageReducer;
