import { deleteComment, getComments, postComments } from '../../store/comment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShowComments ({myImage}) {
    const comments = Object.values(useSelector(state => state.comments))
    const currentImageComments = comments.filter((comment)=>comment.imageId===myImage.id)
    const [comment, setComment] = useState()
    const user = useSelector(state => state.session.user)
    const userId = user.id
    const imageId = myImage.id
    const dispatch = useDispatch()

    const submit= (e) => {
        e.preventDefault()
        console.log("heloo")
        const data = {userId, comment, imageId }
        console.log(data)
        dispatch(postComments(data)).then(()=>dispatch(getComments()))
    }

    const deleteMyComment = async (comment) => {
        console.log(comment)
        const payload = comment.id
        await dispatch(deleteComment(payload)).then(()=> dispatch(getComments()))
    }
    return (
        <div>
            <form onSubmit={submit}>
            <input value={comment} onChange={e=> setComment(e.target.value)} type="text" placeholder='Enter Comment'></input>
            <button >Post Comment</button>
            </form>
                <div>
                    {currentImageComments.map((comment)=>{
                        return(
                            <div>
                                <h3>{comment.User.username}</h3>
                                <div>{comment.comment}</div>
                                <button onClick={(e)=>deleteMyComment(comment)}>Delete</button>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default ShowComments
