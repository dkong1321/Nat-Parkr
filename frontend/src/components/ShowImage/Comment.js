import { deleteComment, getComments, postComments } from '../../store/comment';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
function ShowComments ({myImage, setShowModal}) {
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
        const payload = comment.id
        await dispatch(deleteComment(payload)).then(()=> dispatch(getComments()))
    }
    return (
        <div className='comment_container'>
            <div className='close_comment_sidebar' onClick={()=>setShowModal(false)}><i className="fa-solid fa-x"></i></div>
            <form onSubmit={submit} className="comment_form">
                <ul>
                    {errors.map((error, idx) => (
                        <li className='form_errors' key={idx}>{error}</li>
                    ))}
                </ul>
            <div>Enter A Comment</div>
            <textarea className="comment_input" value={comment} onChange={e => setComment(e.target.value)} type="text" placeholder='Enter Comment' cols="5" rows="5"></textarea >
            <button className='submit_comment_button'>Post Comment</button>
            </form>
                <div className='all_comment_container'>
                    {currentImageComments.map((comment)=>{
                        return(
                            <div className='single_comment_container' key={comment.id}>
                                <div className='comment_text' key={comment.title}>
                                    {comment.userId === userId ? <div className='delete_comment_button' onClick={(e)=>deleteMyComment(comment)}><i className="fa-solid fa-trash-can"></i></div> : <></>}
                                    <div className='comment_text comment_info' >{comment.User.username}:</div>
                                    <div className='comment_text comment_content' >{comment.comment}</div>
                                    <div className='comment_text comment_date' >{moment(comment.createdAt).format("ddd MMM D YYYY h:mm")}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}

export default ShowComments
