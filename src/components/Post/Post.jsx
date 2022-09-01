import React from 'react';

const Post = (props) => {
    return ( <div>
        <li><strong>{props.post.name}</strong></li>
        <p>{props.post.post}</p>
    </div> );
}
export default Post;