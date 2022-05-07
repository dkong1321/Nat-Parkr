import { csrfFetch } from "./csrf";
import rfdc from 'rfdc';
const clone = rfdc();

const LOAD = 'albums/LOAD';
const ADD = 'albums/ADD';
const DELETE = 'albums/DELETE'
const PUT = 'albums/PUT'
const ADDALBUMIMAGE = '/albums/ADDIMAGE'
const DELETEALBUMIMAGE = '/albums/DELETEIMAGE'


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

export const addAlbumImage = (albumImage, image) =>{
    return {
        type: ADDALBUMIMAGE,
        albumImage,
        image
    }
}

export const  putAlbum = (id) => {
        return {
            type:PUT,
            id
        }
}

export const removeAlbumImage = (albumImage, image) =>{
    return {
        type: DELETEALBUMIMAGE,
        albumImage,
        image
    }
}

export const removeAlbum = id => {
    return {
        type:DELETE,
        id
    }
}

export const getAlbums = () => async dispatch => {
    const response = await csrfFetch('/api/albums');
    if(response.ok) {
        const albums = await response.json()
        dispatch(load(albums));
    }
    return response
}

export const editAlbum = (data) => async dispatch => {
    const response = await csrfFetch(`/api/albums/${data.imageId}`, {
        method: "PUT",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    })
    if(response.ok) {
        const editedAlbum = await response.json();
        dispatch(putAlbum)
    }
}

export const postAlbums = (data) => async dispatch => {

    const {title, userId } =data
    const newAlbum = {title,userId}
    const response = await csrfFetch('/api/albums',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(newAlbum)
    })

    if(response.ok) {
        const newAlbum = await response.json();
        dispatch(addAlbum(newAlbum))
    }
}


export const postAlbumImage = (data) => async dispatch => {
    const {albumId, imageId} = data
    console.log(data)
    const albumImage ={albumId,imageId}
    const image = await csrfFetch(`/api/images/${imageId}`)
    const response = await csrfFetch(`/api/albums/addimage/${albumId}`,{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(albumImage)
    })
    if(response.ok){
        const newAlbumImage = await response.json();
        dispatch(addAlbumImage(newAlbumImage,image))
    }

}

export const deleteAlbumImage = (payload) => async dispatch => {
    console.log("hello from thunk")
    console.log(payload)
    const {albumId, image} = payload
    const response = await csrfFetch(`/api/albums/removeimage/${albumId}`,{
        method: 'DELETE',
        body: JSON.stringify(image)
    })

    return response
}

export const deleteAlbums = (id) => async dispatch => {

    const response = await csrfFetch(`/api/albums/${id}`, {
        method: 'DELETE'
    });

    if(response.ok) {
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
            return newState
        case ADD:
            newState[action.album.id] = action.album
            return newState
        case ADDALBUMIMAGE:
            newState[action.albumImage.albumId].Images.push(action.song)
            return newState
        case PUT:
            newState[action.image.id] = action.image
        case DELETE:
            delete(newState[action.id])
            return newState
        default:
            return newState
    }

}

export default albumReducer;
