//package imports
const express = require("express");
const mongoose =  require('mongoose');
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();


//mongoose database connection
mongoose.connect(process.env.MONGODB_URI, {})
    .then(() => console.log("ecomm_db connected"));


//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})