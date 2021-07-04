require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true ,useUnifiedTopology: true })
    .then( () =>  {
        console.log('MongoDB Connected.');
        app.emit('ready');  
    })
    .catch( (error) => console.log(`Error Connecting to DB: ${error}`));

const api = require('./routes/api');
app.use('/', api);

const port = process.env.PORT || 3111;
app.on('ready', () => { 
    app.listen(port, () => {
        console.log(`App is listening on port ${port}`)
    })
}); 


