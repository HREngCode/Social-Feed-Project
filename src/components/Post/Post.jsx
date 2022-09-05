import LikeButton from '../LikeButton/LikeButton';

const Post = (props) => {

    return ( <div className='post-list'>
        <li><strong>{props.post.name}</strong></li>
        <p>{props.post.post}</p>
        <LikeButton/>
    </div> );
}
export default Post;

