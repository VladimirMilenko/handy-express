({
    shouldDeps: [
        {block: 'form', elems: ['header', 'content'], mods: {type: 'login', message: 'popup','has-validation':true}},

        {
            block: 'form-field',
            elems: ['label', 'control'],
            mods: {
                type: ['input', 'hidden'],

                message: 'popup',
                required: true,
                theme: 'islands',
                validate: ['length']
            }
        },

        {block: 'input', mods: {theme: 'islands', size: ['m,l'], type: ['password','hidden']}},
        {
            block: 'button', mods: {
            theme: 'islands',
            size: 'l',
            type: 'submit',
            width: 'available',
            view: 'action'
        }
        },
        {block: 'popup', mods: {theme: 'islands', target: 'anchor', direction: ['top-left', 'right-center']}},

        {block: 'register-form', js: true},
        {block: 'message', elems: ['control'], mods: {type: 'popup'}},
        {block: 'validation', mods: ['length']}
    ]
})