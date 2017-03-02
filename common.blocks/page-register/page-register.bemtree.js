block('page-register')(
    content()(function (ctx) {
        return [
            {
                block: 'register-form',
                js: true,
                content: [
                    {
                        block: 'form',
                        mods: {
                            theme: 'islands',
                            message: 'popup',
                            type: 'login'
                        },
                        directions: ['right-top'],
                        method: 'POST',
                        action: '/',
                        enctype: 'application/x-www-form-urlencoded',
                        content: [
                            {
                                elem: 'header',
                                content: 'Регистрация'
                            },
                            {
                                elem: 'content',
                                content: [
                                    {
                                        block: 'form-field',
                                        name: 'username',
                                        mods: {
                                            theme: 'islands',
                                            type: 'input',
                                            required: true,
                                            message: 'popup',
                                            validate:'length'

                                        },
                                        type: 'input',
                                        directions: ['right-center'],
                                        js: {
                                            required: {
                                                message: 'Поле \'Логин\' не может быть пустым'
                                            },
                                            length:{
                                                message:'Длина логина не может быть меньше 6 символов',
                                            },
                                            min:5
                                        },
                                        content: [
                                            {
                                                elem: 'label',
                                                content: [
                                                    {
                                                        block: 'label',
                                                        content: 'Логин'
                                                    }
                                                ],
                                            },
                                            {
                                                elem: 'control',
                                                content: [
                                                    {
                                                        block: 'input',
                                                        mods: {theme: 'islands', size: 'l', width: 'available'},
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: 'form-field',
                                        name: 'name',
                                        mods: {
                                            theme: 'islands',
                                            type: 'input',
                                            required: true,
                                            message: 'popup',
                                            validate:'length'

                                        },
                                        type: 'input',
                                        directions: ['right-center'],
                                        js: {
                                            required: {
                                                message: 'Поле \'Имя\' не может быть пустым'
                                            },
                                            length:{
                                                message:'Длина имени не может быть меньше 1 символа',
                                            },
                                            min:1
                                        },
                                        content: [
                                            {
                                                elem: 'label',
                                                content: [
                                                    {
                                                        block: 'label',
                                                        content: 'Имя'
                                                    }
                                                ],
                                            },
                                            {
                                                elem: 'control',
                                                content: [
                                                    {
                                                        block: 'input',
                                                        mods: {theme: 'islands', size: 'l', width: 'available'},
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: 'form-field',
                                        name: 'password',
                                        mods: {
                                            theme: 'islands',
                                            type: 'input',
                                            required: true,
                                            validate:'length',
                                            message: 'popup'
                                        },
                                        directions: ['right-center'],
                                        js: {
                                            required: {
                                                message: 'Поле \'Пароль\' не может быть пустым'
                                            },
                                            length:{
                                                message:'Длина пароля не может быть меньше 6 символов',
                                            },
                                            min:6
                                        },
                                        content: [
                                            {
                                                elem: 'label',
                                                content: [
                                                    {
                                                        block: 'label',
                                                        content: 'Пароль'
                                                    }
                                                ],
                                            },
                                            {
                                                elem: 'control',
                                                content: [
                                                    {
                                                        block: 'input',
                                                        mods: {
                                                            theme: 'islands',
                                                            type: 'password',
                                                            size: 'l',
                                                            width: 'available'
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        block: 'form-field',
                                        mods: {
                                            type: 'hidden',
                                        },
                                        name: '_csrf',
                                        val: ctx.data.csrf
                                    },
                                    {
                                        block: 'submit-wrapper',
                                        content:[
                                            {
                                                block: 'button',
                                                mods: {
                                                    theme: 'islands',
                                                    size: 'l',
                                                    type: 'submit',
                                                    width:'available',
                                                    view: 'action'
                                                },
                                                text: 'РЕГИСТРАЦИЯ'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                elem: 'footer',
                                content: [
                                    {
                                        block: 'login-form',
                                        elem:'sign-up',
                                        content:[
                                            {
                                                block:'text',
                                                tag:'span',
                                                content:'Уже зарегистрированы? '
                                            },
                                            {
                                                block:'link',
                                                content:'Войти!',
                                                url:'/users/login/'
                                            }
                                        ]
                                    }
                                ]
                            }

                        ]
                    }
                ]

            }
        ]
    })
);