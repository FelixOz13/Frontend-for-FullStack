import { useDispatch } from 'react-redux'
import { deleteComment } from '../features/comments/commentSlice'
import { AiFillCloseCircle } from 'react-icons/ai'

function CommentItem({ comment }) {
  const dispatch = useDispatch()

  return (
    <div className='comments'>
      <h2 className="comment-form-textarea">
        {new Date(comment.createdAt).toLocaleString('en-US')}<br />{comment.username}<br/>
        {comment.text}<br/>
        <AiFillCloseCircle onClick={() => dispatch(deleteComment(comment._id))} /></h2> 
      </div>
  )
}

export default CommentItem