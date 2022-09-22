const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors"); // this is just have colour in your terminal
const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/user", userRoutes);

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

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server started on PORT ${PORT}` .bold));