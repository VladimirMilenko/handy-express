block('page').content()(function (ctx) {
    var user = ctx.data.user;
    console.log('page');
    return [
        {
            block: 'header',
            content: [
                {
                    block: 'logo',
                    url: '/'
                },
                {
                    block: 'form',
                    mods: {type: 'search'},
                    action: '#',
                    content: [{
                        block: 'input',
                        mods: {theme: 'islands', size: 'l', width: 'available'},
                        placeholder: 'Чем могу помочь?'
                    }]
                },
                {
                    elem: 'nav',
                    content: [
                        {
                            block: 'link',
                            content: 'О нас',
                            url: '#'
                        },
                        {
                            block: 'link',
                            content: 'Регистрация',
                            url: '/users/register/'
                        },
                        {
                            block: 'link',
                            content: 'Войти',
                            url: '/users/login/'
                        }
                    ]
                }
            ]
        },
        {
            block: 'menu',
            content: [
                {
                    elem: 'item',
                    content: {
                        block: 'link',
                        content: 'Сантехника',
                        url: '#'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'link',
                        content: 'Электроника',
                        url: '#'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'link',
                        content: 'Уборка',
                        url: '#'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'link',
                        content: 'Косметология',
                        url: '#'
                    }
                },
                {
                    elem: 'item',
                    elemMods: {type: 'more'},
                    content: {
                        block: 'link',
                        content: 'Еще',
                        url: '#'
                    }
                }
            ]
        },
        {
            block:'content',
            view:ctx.data.view
        },
        {
            block:'footer',
            content: {
                block: 'copyright',
                content: [
                    {
                        block: 'link',
                        content: 'Handy team',
                        url: '#'
                    },
                    ', 2017'
                ]
            }
        }
    ];
});
