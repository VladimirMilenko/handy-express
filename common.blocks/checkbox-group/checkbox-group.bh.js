module.exports = function(bh) {

    bh.match('checkbox-group', function(ctx, json) {
        var _form_field = ctx.tParam('_form_field');

        if(_form_field) {
            json.name = json.name || _form_field.name;
        }
    });

};
