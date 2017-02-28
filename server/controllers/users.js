const mongoose = require('mongoose');
const express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    Render = require('../render'),
    render = Render.render,
    Promise = require('bluebird'),
    User = require('../models/user');

router.get('/register', function (req, res) {
    render(req, res, {
        view: 'page-register',
        title: 'Register page',
        meta: {
            description: 'Page description',
            og: {
                url: 'https://site.com',
                siteName: 'Site name req'
            }
        }
    })
});

router.post('/register', function (req, res) {
    User.register(new User(
        {
            username: req.body.username,
            password: req.body.password,
            likes:req.body.likes,
            name:req.body.name,
            dislikes:req.body.dislikes,
            rating:req.body.rating
        }))
        .then(function (user) {
            req.login(user, function () {
                res.redirect('/');
            })
        })
        .catch(function (error) {
            console.log(error)
        });
});
router.get('/login', function (req, res) {
    render(req, res, {
        view: 'page-login',
        title: 'Login page',
        meta: {
            description: 'Page description',
            og: {
                url: 'https://site.com',
                siteName: 'Site name req'
            }
        }
    })
});
router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});

module.exports = router;