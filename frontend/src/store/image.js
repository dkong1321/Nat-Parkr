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

export const getImages = () => async dispatch => {
    const response = await csrfFetch('/api/images');
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
        console.log("we are in editImage thunk",data)
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
        console.log("working")
        const response = await csrfFetch(`/api/images/${id}`,{
            method: 'DELETE'
        });
        console.log(response)
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
            console.log("hello")
            newState[action.image.id]=action.image
            return newState
        case DELETE:
            delete (newState[action.id])
            return newState
        case PUT:
            delete(newState[action.image.id])
            newState[action.image.id] = action.image
            return newState
        default:
            return newState;
    }
}

export default imageReducer;
