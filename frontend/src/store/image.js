const LOAD = 'images/LOAD';

// action creator
export const load = images => {
    return {
    type:LOAD,
    images
    }
}

export const getImages = () => async dispatch => {
    console.log("got to getImages()")
    const response = await fetch('/api/images');
    console.log("here are my images", response)
    if(response.ok) {
        const images = await response.json();
        console.log(images.images)
        dispatch(load(images));
        // return images
    }
    // return response
}

const initialState = {
    images:{}
}

const imageReducer = (state = initialState, action) =>{
    let newState;
    switch(action.type) {
        case LOAD:
            newState = {};
            // console.log(newState)
            action.images.forEach(image=>{
                newState[image.id] = image
            })
            return newState;
        default:
            return state;
    }
}

export default imageReducer;
