const Render = require('../render'),
    render = Render.render;

module.exports = {
    renderError: function (req, res, error) {
        render(req,res,{
            view: 'page-error',
            title: 'Error occurred',
            error:error
        })
    }
};