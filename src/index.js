const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const MYSQLStore = require('express-session-mysql');


// initialitation
const app = express();
//require('./database/database');
require('./lib/passport.lib');
const { database } = require('./database/config');

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
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false,
    store: new MYSQLStore(database)
}));
app.use(passport.initialize());
app.use(passport.session());


// routes
app.use(require('./routes/index.route'));
app.use(require('./routes/auth.route'));

// global variables

// starting server
app.listen(app.get('port'), () => {
    console.log(' Server on port', app.get('port'))
});