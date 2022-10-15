import React, { useEffect, useState } from 'react'
import axios from 'axios'; // Axios is a library that helps us make HTTP requests to external resources.

const ChatPage = () => {

  const [chats, setChats] = useState([]) // state & setState store data in the state. This is where the data is stored.

  const fetchChats = async () => {
    const { data } = await axios.get('/api/chat');

    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;