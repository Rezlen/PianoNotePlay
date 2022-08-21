import React, { useEffect, useState } from 'react';
import './Feed.css'
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from './firebase';

// this component cover the middle section of the age which includes two sections: 1- Displaying the StoryReels and 2- Displaying the Posts/message sender
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))) //This pulls IN everything from the Googl's NoSql database based the IDs & its Data.
    );
  }, []);  
  
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post 
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
      
    </div>
  )
}

export default Feed;