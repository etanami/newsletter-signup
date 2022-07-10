const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const bootstrap = require('bootstrap');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));




app.listen(3000, ()=> {
    console.log('Server listening on port 3000!');
})
