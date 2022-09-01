import React, { useState } from "react";
import DisplayPosts from "./components/DisplayPosts/DisplayPosts";
import AddPosts from "./components/AddPosts/AddPosts";
import './App.css'

function App() {
  const [posts, setPosts] = useState([
    {
      id:1,
      name: "David LaGrange",
      post: "I love playing guitar. Does anyone want to play with me?",
    },

  ]);

  function addNewPosts(post) {
    let tempPosts = [...posts, post];

    setPosts(tempPosts);
  }

  return (
    <div className='container'>
      <div className="border-box">
        <AddPosts addNewPostProperty={addNewPosts} />
      </div>
      <div>
        <DisplayPosts parentPosts={posts} />
      </div>
    </div>
  );
}
export default App;
