import React, { useState} from "react";


const AddPosts = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        props.addNewPostProperty(newPost)
    }
    return ( 
        <form onSubmit={handleSubmit} >
          <div className="post-box">
            <label className="input-name">
              Name
            </label>
              <input type='text' className="input-box" value={name} onChange={(event) => setName(event.target.value)} />
            <div>
            </div>
            <label className="input-post">
                Post
            </label>
            <textarea type='text' className="input-box" value={post} onChange={(event) => setPost(event.target.value)}></textarea>
            <btn type='submit' className="btn btn-primary">Create</btn>
          </div>
      </form>
     );
}
 
export default AddPosts;