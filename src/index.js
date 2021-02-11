const express = require('express');

// initialitation
const app = express();

// settings
app.set('port', process.env.PORT || 8000);

// middlewares

// routes

// global variables

// starting server
app.listen(app.get('port'), () => {
    console.log(' Server on port', app.get('port'))
});