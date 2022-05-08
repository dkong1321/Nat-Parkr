import { deleteComment, getComments, postComments } from '../../store/comment';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
function ShowComments ({myImage}) {
    const comments = Object.values(useSelector(state => state.comments))
    const currentImageComments = comments.filter((comment)=>comment.imageId===myImage.id)
    const [comment, setComment] = useState()
    const user = useSelector(state => state.session.user)
    const userId = user.id
    const imageId = myImage.id
    const dispatch = useDispatch()

    const [errors, setErrors] = useState([]);

    const submit= (e) => {
        e.preventDefault()
        const data = {userId, comment, imageId }
        const newComment = dispatch(postComments(data))
        .then(()=>dispatch(getComments()))
        .catch(
            async (res) => {
                const data = await res.json();
                if(data && data.errors) {setErrors(data.errors)}
            }
        )
        if (newComment) {
            setErrors([])
            setComment("")
        }
    }

    const deleteMyComment = async (comment) => {
        console.log(comment)
        const payload = comment.id
        await dispatch(deleteComment(payload)).then(()=> dispatch(getComments()))
    }
    return (
        <div>
            <form onSubmit={submit} className="comment_form">
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
            <input value={comment} onChange={e => setComment(e.target.value)} type="text" placeholder='Enter Comment'></input>
            <button>Post Comment</button>
            </form>
                <div className='all_comment_container'>
                    {currentImageComments.map((comment)=>{
                        return(
                            <div className='single_comment_container'>
                                <div className='comment_text' key={comment.title}>
                                    <div className='comment_text' >{comment.User.username}:</div>
                                    <div className='comment_text' >{comment.comment}</div>
                                    <div className='comment_text' >{moment(comment.createdAt).format("ddd MMM D YYYY h:mm")}</div>
                                    {comment.userId === userId ? <button onClick={(e)=>deleteMyComment(comment)}><i class="fa-solid fa-trash-can"></i></button> : <></>}
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default ShowComments
