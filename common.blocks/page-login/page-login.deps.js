({
    shouldDeps: [
        {
            block: 'widget',
            mods: {type: 'register'}
        },
        {
            block: 'form-control',
            elems: [
                'label'
            ]
        },
        {
            block: 'register-form',
            elems: [
                'title',
                'submit'
            ]
        },
        {
            block: 'input',
            mods: {'has-clear': true, theme: 'islands', size: 'm'}
        },
        {
            block: 'select',
            mods: {mode: 'radio', theme: 'islands', size: 'm'}
        },
        {
            block: 'textarea',
            mods: {theme: 'islands', size: 'l', width: 'available'}
        }
    ]
})