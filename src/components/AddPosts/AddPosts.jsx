import React, { useState} from "react";

const AddPosts = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('')

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
        <label>
          Name
          <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
        </label>
          <div>
          </div>
        <label>
          Post
          <textarea rows="2" cols="40" type='text' value={post} onChange={(event) => setPost(event.target.value)} ></textarea>
        </label>
        <button type='submit' className="btn btn-primary">Create</button>
      </form>
     );
}
 
export default AddPosts;