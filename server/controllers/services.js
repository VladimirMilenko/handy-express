const mongoose = require('mongoose');
const express = require('express'),
    router = express.Router(),
    Render = require('../render'),
    render = Render.render,
    Service = require('../models/service'),
    Category = require('../models/category'),
    serviceHelpers = require('../helpers/services'),
    errorHelpers = require('../helpers/errors'),
    isLoggedIn = require('../middleware/auth');

router.get('/create', function (req, res) {
    Category.find().limit(5).exec()
        .then(function(categories){
            let catArray = categories.map(function(category){
               return {val:category._id + '',text:category.title}
            });
            render(req, res, {
                view: 'create-service',
                title: 'Create service',
                meta: {
                    description: 'Page description',
                    og: {
                        url: 'https://site.com',
                        siteName: 'Site name req'
                    }
                },
                categories:catArray
            })
        });

});

router.post('/create', isLoggedIn, function (req, res) {
    console.log(req.body);
    let service = new Service({
        title: req.body.title,
        tags: req.body.tags.split(','),
        description:req.body.description,
        price: req.body.price,
        postedBy: req.user,
        category:req.body.category
    });
    service.save()
        .then(function (service) {
            serviceHelpers.renderFullService(req, res, service);
        })
        .catch(function (error) {
            console.log(error);
            errorHelpers.renderError(req, res, error);
        });
});
router.get('/:id', function (req, res) {
    console.log('id');
    Service.findOne({id: req.params.id}).exec()
        .then(function (service) {
            if (service) {
                serviceHelpers.renderFullService(req, res, service);
            } else {
                errorHelpers.renderError(req, res, "404");
            }
        })
        .catch(function (error) {
            errorHelpers.renderError(req, res, error);
        })
});


module.exports = router;