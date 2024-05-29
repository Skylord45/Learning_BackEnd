// create server with node.js

const http = require('http');

const app = http.createServer((req, res) => {

    const url = req.url;

    if(url == '/'){
        res.write("home page")
        res.end();
    }else if(url == '/about'){
        res.write("about page")
        res.end();
    }else{
        res.write("hello world")
        res.end();
    }
});

app.listen(8080, () => {
    console.log("Server is created at port 8080");
});


const conne = require('mongoose')

conne.connect('mongodb://localhost:27017/Dummy',{

})
.then(() => {console.log("Connected !!")})
.catch((error) => {console.log("Error while connecting", error)})