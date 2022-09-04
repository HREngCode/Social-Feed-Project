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
      <div>
        <h3 style={{'margin':'.5em'}}>Social<span className="text-muted">Feed</span></h3>
      </div>
      <div className="center">
        <div className="border-box">
          <AddPosts addNewPostProperty={addNewPosts} />
        </div>
        <div className="border-box">
          <DisplayPosts parentPosts={posts} />
        </div>
      </div>
    </div>
  );
}
export default App;
