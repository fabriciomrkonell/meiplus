'use strict';

var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    compression = require('compression'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    swig = require('swig'),
    mongoose = require('./config/database'),
   	passport = require('passport'),
    service = require('./services/service'),
    expressSession = require('express-session'),
    RedisStore = require('connect-redis')(expressSession),
    LocalStrategy = require('passport-local').Strategy,
    User = require('./models/user');

var routes = require('./routes/index'),
	  routes_home = require('./routes/home'),
		routes_profile = require('./routes/profile'),
    routes_participant = require('./routes/participant'),
    routes_product = require('./routes/product'),
    routes_property = require('./routes/property'),
    routes_accountingAccount = require('./routes/accountingAccount'),
    app = express();

// Configuration
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));

// Passport
app.use(expressSession({ store: new RedisStore({
  host: '127.0.0.1',
  port: 6379
}), secret: 'secret-key' }));


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
app.use('/app/participant', service.isAutenticate, routes_participant);
app.use('/app/product', service.isAutenticate, routes_product);
app.use('/app/property', service.isAutenticate, routes_property);
app.use('/app/accounting-account', service.isAutenticate, routes_accountingAccount);

module.exports = app;