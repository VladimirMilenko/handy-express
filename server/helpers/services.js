const Render = require('../render'),
    render = Render.render;

module.exports = {
    renderFullService: function (req, res, service) {
        render(req,res,{
            view: 'page-service',
            title: service.title,
            meta: {
                description: 'Page description',
                og: {
                    url: 'https://site.com',
                    siteName: 'Site name req'
                }
            },
            service:service
        });
    },
    getServicesBEMTREE:function(services){
        return services.map(function (service) {
            return {
                block: 'card',
                service: service
            }
        });

    }
};