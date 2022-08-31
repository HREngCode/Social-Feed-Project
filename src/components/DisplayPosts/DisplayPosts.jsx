import Post from "../Post/Post";

const DisplayPosts = (props) => {
    return ( 
        // <table className="table">
        //     <div>Name</div>
        //     <div>
        //         Post
        //     </div>
        // </table>
        <ul>
            {props.parentPosts.map(el => <li key={el.id}><Post post={el}/></li>)}
        </ul>
     );
}
export default DisplayPosts;