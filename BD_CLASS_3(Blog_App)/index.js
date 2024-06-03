const express = require('express')
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

// middleware
app.use(express.json())


// get router 
const blog = require('./router/blog.router.js')
// mount
app.use('/api/v1', blog);

// import dataBase file 
const DBconnection = require('./config/DataBase.js')
DBconnection();


// start server 
app.listen(port, () => {
    console.log(`App is running on port : ${port}`);
})

app.get('/', (req, res) => {
    res.send("home page")
})