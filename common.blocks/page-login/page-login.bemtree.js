block('page-login')(
    content()(function (ctx) {
        return {
            block: 'login-form',
            tag: 'form',
            attrs: {
                method: 'post'
            },
            mods: {
                theme: 'islands'
            },
            content: [
                {
                    block: 'input',
                    name: 'username',
                    mods: {
                        size: 'm',
                        theme: 'islands'
                    },
                    placeholder: 'Логин'
                },
                {
                    block: 'input',
                    name: 'password',
                    mods: {
                        size: 'm',
                        theme: 'islands'
                    },
                    placeholder: 'Пароль'
                },
                {
                    block: 'button',
                    mods: {theme: 'islands', size: 'm', view: 'action', type: 'submit'},
                    text: 'Войти'
                },
                {
                    block: 'csrf',
                    tag: 'input',
                    attrs: {
                        name: '_csrf',
                        type: 'hidden',
                        value: ctx.data.csrf
                    }

                }
            ]
        }
    })
);