// require mongoose for connection between nodeJs and mongoDB
const mongoose = require("mongoose")

//require dotenv to connect env file 
require("dotenv").config();


//connect method for connect with the database as first parameter is url of database path
const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(console.log("DB Connected Successfully"))
        .catch((error) => {
            console.log("DB Facing Connection Issues");
            console.log(error);
            process.exit(1);
        })
};

module.exports = connectWithDb;