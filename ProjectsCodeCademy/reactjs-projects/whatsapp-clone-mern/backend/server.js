const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
// const { chats } = require("./data/data");
const colors = require("colors"); // this is just have colour in your terminal
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // since we are getting user data from frontend, we must tell the json file to accept it. 

app.get('/', (req, res) => {
  res.send("API is running successfully");
  app.use("/api/user", userRoutes);
});

app.use("/api/user", userRoutes);

// error handling middle ware
app.use(notFound);
app.use(errorHandler);

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