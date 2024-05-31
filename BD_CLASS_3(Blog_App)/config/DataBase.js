const mongoose = require('mongoose')

require('dotenv').config();

const DBconnection = () => {
    mongoose.connect(process.env.DATABASE_URL , {})
    .then( () => {console.log("DATABASE Connected !!");})
    .catch( (error) => {console.log("Error while connecting", error);})
}

DBconnection()
module.exports = DBconnection;