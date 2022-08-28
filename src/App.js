import React, { useState } from 'react';
import AddPosts from './components/AddPosts/AddPosts';
import DisplayPosts from './components/DisplayPosts/DisplayPosts';


function App() {

  const [posts, setPosts] = useState([{name: 'David LaGrange', post: 'I love playing guitar. Does anyone want to play with me?'}])

  return (
    <div>
      <table>
        <thead>
          <tr>Name</tr>
          <tr>Post</tr>
        </thead>
      </table>
    </div>
  );
};
export default App;
