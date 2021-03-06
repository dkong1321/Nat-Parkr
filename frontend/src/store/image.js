import { csrfFetch } from "./csrf";
import rfdc from 'rfdc';
const clone = rfdc();

const LOAD = 'images/LOAD';
const ADD = 'images/ADD';
const DELETE = 'images/DELETE'
const PUT = 'images/PUT'
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

export const putImage = image => {
    return {
        type:PUT,
        image
    }
}

export const removeImage = id => {
    return {
        type:DELETE,
        id
    }
}

    function shuffleArray(array) {
            for (let i = array.length -1; i>0; i--){
                const j = Math.floor(Math.random() * (i+1));
                [array[i], array[j]] = [array[j], array[i]]
            }
            return array
    }

export const getImages = () => async dispatch => {
    const response = await csrfFetch('/api/images');
    if(response.ok) {
        const images = await response.json();
        dispatch(load(images));
    }
}

export const postImage = (data) => async dispatch => {
    const formData = new FormData();
    formData.append("image", data.image)
    formData.append("description", data.description)
    formData.append("userId", data.userId)
    formData.append("title", data.title)
    formData.append("albumId", data.albumId)
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
        const response = await csrfFetch(`/api/images/editimage/${data.imageId}`,{
        method:"PUT",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
        })
        if(response.ok){
            const editedImage = await response.json();
            dispatch(putImage(editedImage))
        }

        return response
    }

export const deleteImage = (id) =>async dispatch =>{
        const response = await csrfFetch(`/api/images/${id}`,{
            method: 'DELETE'
        });
        if(response.ok){
            dispatch(removeImage(id))
        }
        return response
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
            return newState;
        case PUT:
            delete(newState[action.image.id])
            newState[action.image.id] = action.image
            return newState;
        case DELETE:
            delete (newState[action.id])
            return newState;
        default:
            return newState;
    }
}

export default imageReducer;
