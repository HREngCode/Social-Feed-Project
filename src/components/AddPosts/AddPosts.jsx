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
          <div className="form-inline">
            <label className="col-sm-1 col-form-label">
              Name
            </label>
              <input type='text' className="col" value={name} onChange={(event) => setName(event.target.value)} />
            <div>
            </div>
            <label className="col-sm-1 col-form-label">
              <div>
                Post
              </div>
            </label>
            <textarea type='text' class="col" value={post} onChange={(event) => setPost(event.target.value)}></textarea>
            <button type='submit' className="btn btn-primary">Create</button>
          </div>

      </form>
     );
}
 
export default AddPosts;