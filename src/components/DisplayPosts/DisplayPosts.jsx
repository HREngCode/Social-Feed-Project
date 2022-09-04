import Post from "../Post/Post";

const DisplayPosts = (props) => {
    return ( 
        <ul className="display-list">
            {props.parentPosts.map(el => <li key={el.id}><Post post={el}/></li>)}
        </ul>
     );
}
export default DisplayPosts;