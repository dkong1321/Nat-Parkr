import { csrfFetch } from "./csrf";
import rfdc from 'rfdc';
const clone = rfdc();

const LOAD = 'albums/LOAD';
const ADD = 'albums/ADD';
const DELETE = 'albums/DELETE'

export const load = albums => {
    return {
        type:LOAD,
        albums
    }
}

export const addAlbum = album => {
    return {
        type:ADD,
        album
    }
}

export const removeAlbum = id => {
    return {
        type:DELETE,
        id
    }
}

export const getAlbums = () => async dispatch => {
    console.log("hello from get Albums")
    const response = await csrfFetch('/api/albums');
    console.log(response)
    if(response.ok) {
        const albums = await response.json()
        dispatch(load(albums));
    }
    return response
}

export const postAlbums = (data) => async dispatch => {
    // const formData = new FormData();
    // console.log("my data is in postAlbums now", data)
    // formData.append("title", data.title)
    // formData.append("userId", data.userId)
    // console.log(formData)

    const {title, userId } =data
    const newAlbum = {title,userId}
    const response = await csrfFetch('/api/albums',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(newAlbum)
    })

    if(response.ok){
        const newAlbum = await response.json();
        dispatch(addAlbum(newAlbum))
    }
}

export const deleteAlbums = (id) => async dispatch => {
    console.log("hello from delete album thunk")

    const response = await csrfFetch(`/api/images/${id}`, {
        method: 'DELETE'
    });

    if(response.ok){
        dispatch(removeAlbum(id))
    }
    return response
}

const initialState = {}

const albumReducer = (state = initialState, action) =>{
    const newState = clone(state);
    switch(action.type) {
        case LOAD:
            const albumArr = action.albums
            albumArr.albums.forEach(album => {
                newState[album.id] = album
            })
            console.log("hello from the load",newState)
            return newState
        case ADD:
            newState[action.album.id] = action.album
            return newState
        default:
            return newState
    }

}

export default albumReducer;
