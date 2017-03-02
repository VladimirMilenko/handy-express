/**
 * @module app
 */
modules.define('register-form',
    ['i-bem-dom', 'form' ,'jquery'],
    function (provide, bemDom, Form, $) {
        /**
         * login-form block
         */
        provide(bemDom.declBlock(this.name, /** @lends login-form.prototype */{

            onSetMod: {
                'js': {
                    'inited': function () {
                        this._form = this.findChildBlock(Form);
                        this._form._domEvents().on('submit', function (e, val) {
                            this._form.validate()
                                .then(function (fieldsStatuses) {
                                    console.log(fieldsStatuses);
                                    if (this._form.checkFields(fieldsStatuses)) {
                                        console.log(fieldsStatuses);
                                        this._form.getMessage().hide();
                                        $.ajax({
                                            type: "POST",
                                            url: '/users/register/',
                                            data: this._form.getVal(), // serializes the form's elements.
                                            success: function(data)
                                            {
                                                if(data.redirect){
                                                    window.location.href = data.redirect;
                                                }
                                            }
                                        });
                                    } else {
                                        this._form.setMessageVal(this._concatMessages(fieldsStatuses));
                                        this._form.getInvalidFields()
                                            .then(function (invalidFields) {
                                                invalidFields[0].getControl().setMod('focused',true);
                                            });
                                    }
                                }.bind(this));
                        }.bind(this));
                    }
                }
            },

            _concatMessages: function (fieldsStatuses) {
                var messages = [];
                for (var i = 0, l = fieldsStatuses.length; i < l; i++) {
                    if (fieldsStatuses[i] !== null) {
                        messages.push([
                            fieldsStatuses[i]['field'],
                            ': ',
                            fieldsStatuses[i]['message']
                        ].join(''));
                    }
                }
                return messages.join('<br>');
            }

        }));

    });