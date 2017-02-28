Object.assign || (Object.assign = require('object-assign'));

const fs = require('fs'),
    path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    serveStatic = require('serve-static'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session'),
    slashes = require('connect-slashes'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    csrf = require('csurf'),
    compression = require('compression'),

    config = require('./config'),
    staticFolder = config.staticFolder,

    Render = require('./render'),
    render = Render.render,
    dropCache = Render.dropCache, // eslint-disable-line no-unused-vars
    port = process.env.PORT || config.defaultPort,
    isSocket = isNaN(port),
    isDev = process.env.NODE_ENV === 'development',
    db = require('./db'),
    User = require('./models/user'),
    Category = require('./models/category'),
    Service = require('./models/service');

require('debug-http')();


app
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(compression())
    .use(favicon(path.join(staticFolder, 'favicon.ico')))
    .use(serveStatic(staticFolder))
    .use(morgan('combined'))
    .use(cookieParser())
    .use(bodyParser.urlencoded({extended: true}))
    .use(expressSession({
        resave: true,
        saveUninitialized: true,
        secret: config.sessionSecret
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use(csrf({cookie:true}))

// NOTE: conflicts with livereload
isDev || app.use(slashes());

let authStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, function (username, password, done) {
    User.authenticate(username, password)
        .then(function (user) {
            console.log('authenticated');
            done(null, user, null);
        })
        .catch(function (error) {
            done(error, null, error ? {message: error.message} : null);
        })
});

let authSerializer = function (user, done) {
    done(null, user.id);
};

let authDeserializer = function (id, done) {
    User.findById(id).exec()
        .then(
            function (user) {
                done(null, user);
            }
        )
        .catch(
            function (error) {
                done(error, null);
            }
        )
}


passport.use(authStrategy);
passport.serializeUser(authSerializer);

passport.deserializeUser(authDeserializer);

app.get('/ping/', function (req, res) {
    res.send('ok');
});
app.use(require('./controllers'));
app.use(function (req, res, next){
    res.locals._csrf = req.csrfToken();
    next();
});
app.get('/', function (req, res) {
    let categs = [];
    Category.find().limit(3).exec()
        .then(function (categories) {
            let servicePromises = [];
            categs = categories;
            for (let cat of categories) {
                servicePromises.push(Service.find({
                    category: cat._id
                }).populate('postedBy').limit(4).exec());
            }
            return Promise.all(servicePromises);
        })
        .then(function(services){
            let result = [];
            for(let i=0;i<categs.length;i++){
                result.push({
                    category:categs[i],
                    services:services[i]
                })
            }
            render(req, res, {
                view: 'page-index',
                title: 'It Helps!',
                meta: {
                    description: 'ItHelps demo page',
                    og: {
                        url: 'running on heroku',
                        siteName: 'ItHelps'
                    }
                },
                user: req.user,
                pageData:result
            })
        });
});
app.get('/2', function (req, res) {
    render(req, res, {
        view: 'page-index',
        title: 'Main page',
        meta: {
            description: 'Page description',
            og: {
                url: 'https://site.com',
                siteName: 'Site name'
            }
        },
        loggedIn: req.user ? true : null
    })
});
isDev && require('./rebuild')(app);

app.get('*', function (req, res) {
    res.status(404);
    return render(req, res, {view: '404'});
});

if (isDev) {
    app.get('/error/', function () {
        throw new Error('Uncaught exception from /error');
    });

    app.use(require('errorhandler')());
}

isSocket && fs.existsSync(port) && fs.unlinkSync(port);
mongoose.promise = global.Promise;

mongoose.connect('mongodb://astex:760326@handycluster-shard-00-00-rgwa7.mongodb.net:27017,handycluster-shard-00-01-rgwa7.mongodb.net:27017,handycluster-shard-00-02-rgwa7.mongodb.net:27017/handy?ssl=true&replicaSet=HandyCluster-shard-0&authSource=admin')
    .then(
        function () {
            app.listen(port, function () {
                isSocket && fs.chmod(port, '0777');
                console.log('server is listening on', this.address().port);
            });
        }
    );

