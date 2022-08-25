const express = require("express");
const { chats } = require("./data/data");

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

// This requests all of the chats & display here: http://localhost:5000/api/chat
app.get('/api/chat', (req, res) => {
  res.send(chats);
});

// This requests a specific chat and display here: http://localhost:5000/api/chat/:id
app.get('/api/chat/:id', (req, res) => {
  // console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id); // 'C' stands for COMPARE.
  res.send(singleChat);
});

app.listen(5000, console.log("Server started on PORT 5000"));