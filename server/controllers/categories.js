const mongoose = require('mongoose');
const express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    Render = require('../render'),
    render = Render.render,
    Category = require('../models/category'),
    errorHelpers = require('../helpers/errors'),
    isLoggedIn = require('../middleware/auth');

router.get('/create', isLoggedIn, function (req, res) {
    render(req, res, {
        view: 'page-create-category',
        title: 'Create category',

    })
});

router.post('/create', function (req, res) {
    new Category({
        title: req.body.title,
        icon: req.body.icon
    }).save()
        .then(function () {
            res.redirect('/');
        })
        .catch(function (error) {
            errorHelpers.renderError(req, res, error);
        })
});

module.exports = router;