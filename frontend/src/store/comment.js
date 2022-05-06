import { csrfFetch } from "./csrf";
import rfdc from 'rfdc';
import { addAlbum, removeAlbum } from "./album";
const clone = rfdc();

const LOAD = 'comments/LOAD';
const ADD = 'comments/ADD';
const DELETE = 'comments/DELETE'

export const load = comments => {
    return {
        type: LOAD,
        comments
    }
}

export const addComment = comment => {
    return {
        type:ADD,
        comment
    }
}

export const removeComment = comment => {
    return {
        type: DELETE,
        comment
    }
}

export const getComments = () => async dispatch => {

    const response = await csrfFetch('/api/comments');
    if(response.ok){
        const comments = await csrfFetch('/api/albums');
        if(response.ok){
            const comments = await response.json()
            dispatch(load(comments))
        }
    }
}

export const postComments = (data) => async dispatch => {
    const {comment, userId, imageId} = data
    const newComment = {comment, userId, imageId}
    const response = csrfFetch('/api/comments',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newComment)
    })

    if(response.ok) {
        const newComment = await response.json();
        dispatch(addComment(response))
    }
}

export const deleteComment = (id) => async dispatch => {
    const response = await csrfFetch(`/api/comment/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeAlbum(id))
    }
    return response
}

const initialState = {}

const commentReducer = (state = initialState, action) => {
    const newState = clone(state);
    switch(action.type) {
        case LOAD:
        const commentArr = action.comments
        commentArr.comments.forEach(comment =>{
            newState[comment.id] = comment
        })
        case ADD:
            // newState[action.comment.id] = action.comment
            return newState
        case DELETE:
            delete newState[action.id]
            return newState
        default:
            return newState
    }
}

export default commentReducer;
