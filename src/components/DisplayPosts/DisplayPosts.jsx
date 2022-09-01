import Post from "../Post/Post";

const DisplayPosts = (props) => {
    return ( 
        <ul className="table">
            {props.parentPosts.map(el => <li key={el.id}><Post post={el}/></li>)}
        </ul>
     );
}
export default DisplayPosts;