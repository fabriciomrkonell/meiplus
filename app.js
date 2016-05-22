'use strict';

var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    swig = require('swig'),
    mongoose = require('./config/database'),
   	passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    service = require('./services/service'),
    User = require('./models/user');

var routes = require('./routes/index'),
		routes_home = require('./routes/home'),
		routes_profile = require('./routes/profile'),
    app = express();

// Configuration
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));

// Passport
app.use(require('express-session')({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Definitions
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', true);
swig.setDefaults({ cache: false });

app.use('/', routes);
app.use('/', service.isAutenticate, routes_home);
app.use('/app/perfil', service.isAutenticate, routes_profile);

module.exports = app;