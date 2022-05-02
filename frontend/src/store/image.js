import { csrfFetch } from "./csrf";
import rfdc from 'rfdc';
const clone = rfdc();

const LOAD = 'images/LOAD';
const ADD = 'images/ADD';
const DELETE = 'images/DELETE'

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

export const removeImage = id => {
    return {
        type:DELETE,
        id
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
    }
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
        dispatch(addImage(newImage))
        }
    }

export const editImage = (data) => async dispatch => {
        console.log(data)
        console.log(data.imageId)
        console.log("hello from line 62")
        const response = await csrfFetch(`/api/images/editimage/${data.imageId}`,{
        method:"PUT",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
        })
        if(response.ok){
            const editedImage = await response.json();
            dispatch(editImage(editedImage))
        }
    }

export const deleteImage = (id) =>async dispatch =>{
        const response = await csrfFetch(`/api/images/${id}`,{
            method: 'DELETE'
        });

        if(response.ok){
            dispatch(deleteImage(id))
        }
    }



const initialState = {}

const imageReducer = (state = initialState, action) =>{
    const newState = clone(state)
    switch(action.type) {
        case LOAD:
            const imageArr = action.images
            imageArr.images.forEach(image=>{
                newState[image.id] = image
            })
            return newState;
        case ADD:
            newState[action.image.id]=action.image
            return newState
        case DELETE:
            delete (newState[action.id])
            return newState
        default:
            return newState;
    }
}

export default imageReducer;
