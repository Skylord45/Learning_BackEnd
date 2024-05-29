// create server with Express.js

const express = require('express');

// use for post request to send data 
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

app.listen(3000, ()=> {
    console.log("Server is created at port 3000");
})

app.get('/', (req, res) => {
    res.send("home page")
})

// we easily check for get req. because it can't send data 
app.get('/about', (req, res) => {
    res.send("about page")
})

// how we check for post req. => we send data
// (1) we use body-parser for adding data in req.body & give app for use
// (2) use postman to cheak
// (3) app.use(bodyParser.json());  -> here .json for send .json data

app.post('/api/car', (req, res) => {
     const {carName, carBrand}= req.body;
     console.log(carName);
     console.log(carBrand);
     res.send("Car data submitted succesfully");
})


// connect to server
const mongo = require('mongoose');
mongo.connect('mongodb://localhost:27017/myDatabase',{  // this is a promise
})
.then(() => {console.log("DataBase connected succesfully")})
.catch((err) => {console.log("Error while connecting DataBase",err)})