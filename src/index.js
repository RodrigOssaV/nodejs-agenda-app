const express = require('express');
const morgan = require('morgan');

// initialitation
const app = express();

// settings
app.set('port', process.env.PORT || 8000);

// middlewares
app.use(morgan());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes
app.use(require('./routes/index.route'));

// global variables

// starting server
app.listen(app.get('port'), () => {
    console.log(' Server on port', app.get('port'))
});