({
    shouldDeps: [
        {mods: {view: ['404', 'login'], theme: 'islands'}},
        {block: 'header', elems: ['nav']},
        {block: 'content'},
        'footer',
        {block: 'menu', elems: [{elem: 'item', mods: {state: 'active'}}]},
        {block: 'logo'},
        {block: 'form', mods: {type: 'search'}},
        {block: 'link'}
    ]
})
