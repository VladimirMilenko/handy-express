/**
 * @module form-field
 */
modules.define('form-field',
    ['validation_length'],
    function(provide, validate_length, FormField) {
        /**
         * Card form-field validation
         * @exports
         * @class form-field
         * @bem
         */
        FormField.declMod({ modName : 'validate', modVal : 'length' }, /** @lends form-field.prototype */{

            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this.__base.apply(this, arguments);
                        this.params.length && this.setValidationMessages({
                            length : this.params.length.message
                        });

                        this.getValidator().push(validate_length(this));
                    }
                }
            }

        });

        provide(FormField);

    });
