// (1) create server
// (2) export dotenv config for port number
// (3) middleware to parse middleware body
// (4) mount this todoRoute API to versioning like (api/v1)
// (5) start server
// (6) DataBase Connection 

// (1) create server
const express = require('express');
const app = express();

// (2) import dotenv config for port number
require('dotenv').config();

const port = process.env.PORT || 8080;


// in controller we have parse a data than we use parser or middleware 
// (3) middleware to parse middleware body
app.use(express.json());


// import todoRoutes for mapping
const todoRouter = require('./router/todo.router.js')

// (4) we need to mount this todoRoute API to versioning like (api/v1)
// we use app.use middleware for that

app.use("/api/v1", todoRouter);

// create simple router => home page
app.get('/', (req, res) => {
    res.send("Home page");
})
// about page
app.get('/about', (req, res) => {
    res.send("about page");
})

// (5) start server
app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
})

// (6) connected to DataBase

const connect = require('./config/dataBase.js')
connect();