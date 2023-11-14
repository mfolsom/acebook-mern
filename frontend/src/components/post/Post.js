import React from 'react';

const Post = ({post}) => {

  return(
    <article data-cy="post" key={ post._id }>
      {/* change below to display name later */}
      <h2 className='user-display-name'>{ post.user_id }</h2> 
      <p className='post-message'>{ post.message }</p>
      {/* change below to display date nicer later */}
      <p className='post-date-posted'>{ post.date_posted }</p>
    </article>
  )
}

export default Post;
