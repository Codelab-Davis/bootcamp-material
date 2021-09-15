const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

var bodyParser = require('body-parser')
app.use(bodyParser.json())

require('dotenv').config();

const itemRouter = require('./routes/items');
app.use('/items', itemRouter); 

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.");
})