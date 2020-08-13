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

const getPage = async (req, res) => {
    console.log('getting page request');
    console.log(req.params.id);
    res.send(report)
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});