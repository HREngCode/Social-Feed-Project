import React, {useState} from 'react';

const Post = (props) => {
  const [isActive,setActive] = useState(true);
    return ( <div className='post-list'>
        <li><strong>{props.post.name}</strong></li>
        <p>{props.post.post}</p>
        <i className={`container ${isActive?"fa fa-thumbs-up":"fa fa-thumbs-down"}`} onClick={()=>setActive(!isActive)}></i>
    </div> );
}
export default Post;

