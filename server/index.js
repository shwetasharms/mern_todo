//step1: create a folder
//step2: move into that folder
//step3: npm init -y
//step4: open folder using VSCode
//step5: npm i express 
//step6: npm i mongoose
//step7: npm i dotenv
//step8: npm i nodemon


//require express for create server
const express = require("express");
const app = express();


require("dotenv").config();
// define the port on which server run
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

const todos = require("./routes/todos")

//mount
app.use("/api/v1", todos);

const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
    console.log(`App is started at Port no ${PORT}`);
})

app.get("/", (req, res) => {
    res.send(`<h1>This is my homePage baby</h1>`)
})