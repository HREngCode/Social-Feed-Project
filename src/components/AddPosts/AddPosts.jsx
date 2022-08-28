import React, { useState} from "react";

const AddPosts = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        props.addNewPost(newEntry)
    }
    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
        </table>
     );
}
 
export default AddPosts;