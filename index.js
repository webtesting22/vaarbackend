const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require("cors")


dotenv.config({ path: './config.env' });
require('./db/conn');
app.use(express.json());
const allowedOrigins = [
    "http://localhost:5173",
    "https://vaar-web-project.vercel.app",
    "https://www.vaar.co/"
  ];
  app.use(
    cors({
      origin: allowedOrigins,
      credentials: true,
    })
  );
const Blog = require('./modal/BlogSchema');
app.use(require('./router/auth'));
const PORT = process.env.PORT;


app.get('/', (req, res) => {
    res.send('Hello Vaar');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
