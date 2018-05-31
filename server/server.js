const express = require('express');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const router = require('./routers/record.router');
const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded ({extended:true}));
app.use('/record', router);

// Connect to Mongo DB
const mongoose = require('mongoose');
const DATABASE_NAME = 'recordStore';
const DATABASE_URL = `mongodb://localhost:27017/${DATABASE_NAME}`;
mongoose.connect(DATABASE_URL);

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected to', DATABASE_URL);
});
// don't use SCREAMING_SNAKE_CASE for variables that can change
mongoose.connection.on('error', (error) => {
    console.log('Mongoose connection error: ', error);
    
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});