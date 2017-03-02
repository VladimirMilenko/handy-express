({
    shouldDeps: [
        {block: 'form', elems: ['header', 'content'], mods: {type: 'login', message: 'popup'}},

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

        {block: 'input', mods: {theme: 'islands', size: ['m,l'], type: ['password']}},
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

        {block: 'login-form', js: true},
        {block: 'message', elems: ['control'], mods: {type: 'popup'}},
        {block: 'validation', mods: ['length']}
    ]
})