
const mongo = require("mongoose");

// for adding .env variable to process.env => like process.env.DATABASE_URL
require("dotenv").config();

const DBconnection = () => {
    mongo.connect(process.env.DATABASE_URL)
    .then( () => {console.log("DB connected !!")})
    .catch( (err) => {console.log("Error while connecting", err)
    process.exit(1);
    });

}

 module.exports = DBconnection;