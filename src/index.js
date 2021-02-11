const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// initialitation
const app = express();

// settings
app.set('port', process.env.PORT || 8000);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes
app.use(require('./routes/index.route'));

// global variables

// starting server
app.listen(app.get('port'), () => {
    console.log(' Server on port', app.get('port'))
});