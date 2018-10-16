import React from 'react'
import { Comment } from '../'

import './CommentList.css'

const CommentList = ({comments}) => {
  const commentList = comments.map(
    (comment, index) => (
      <Comment
        name={comment.email}
        body={comment.body}
        key={index}
      />
    )
  )

  return (
    <ul className="CommentList">
      {commentList}
    </ul>
  )
}

export default CommentList