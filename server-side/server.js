const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('bodyParser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

//use body Parser to support app/json post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection up and running")
});

//set up routes

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});