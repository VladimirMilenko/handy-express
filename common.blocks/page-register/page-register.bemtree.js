block('page-register')(
    content()(function (ctx) {
        return {
            block: 'register-form',
            mix: [{block: 'widget', mods: {type: 'register'}}],
            tag: 'form',
            attrs: {
                method: 'post'
            },
            mods: {
                theme: 'islands'
            },
            content: [
                {
                    elem:'title',
                    content:'Регистрация',
                    tag:'h2'
                },
                {
                    block: 'form-control',
                    content: [
                        {
                            block:'form-control',
                            elem:'label',
                            content:'Логин'
                        },
                        {
                            block: 'input',
                            name: 'username',
                            mods: {
                                size: 'm',
                                theme: 'islands',
                                width: 'available',
                                'has-clear':true
                            },
                            autocomplete:false
                        }
                    ]
                },
                {
                    block: 'form-control',
                    content:[
                        {
                            block:'form-control',
                            elem:'label',
                            content:'Пароль'
                        },
                        {
                            block: 'input',
                            name: 'password',
                            mods: {
                                size: 'm',
                                type:'password',
                                theme: 'islands',
                                width: 'available',
                                'has-clear':true
                            },
                            autocomplete:false
                        }
                    ],
                },
                {
                    block: 'form-control',
                    content: [
                        {
                            block:'form-control',
                            elem:'label',
                            content:'Имя'
                        },
                        {
                            block: 'input',
                            name: 'name',
                            mods: {
                                size: 'm',
                                theme: 'islands',
                                width: 'available',
                                'has-clear':true
                            },
                            autocomplete:false
                        }
                    ]
                },
                {
                    block: 'form-control',
                    content: [
                        {
                            block:'form-control',
                            elem:'label',
                            content:'Лайки'
                        },
                        {
                            block: 'input',
                            name: 'likes',
                            mods: {
                                size: 'm',
                                theme: 'islands',
                                width: 'available',
                                'has-clear':true
                            },
                            autocomplete:false
                        }
                    ]
                },
                {
                    block: 'form-control',
                    content: [
                        {
                            block:'form-control',
                            elem:'label',
                            content:'Дизлайки'
                        },
                        {
                            block: 'input',
                            name: 'dislikes',
                            mods: {
                                size: 'm',
                                theme: 'islands',
                                width: 'available',
                                'has-clear':true
                            },
                            autocomplete:false
                        }
                    ]
                },
                {
                    block: 'form-control',
                    content: [
                        {
                            block:'form-control',
                            elem:'label',
                            content:'Рейтинг'
                        },
                        {
                            block: 'input',
                            name: 'rating',
                            mods: {
                                size: 'm',
                                theme: 'islands',
                                width: 'available',
                                'has-clear':true
                            },
                            autocomplete:false
                        }
                    ]
                },
                {
                    block: 'register-form',
                    elem:'submit',
                    content:[
                        {
                            block:'button',
                            mods: {theme: 'islands', size: 'l', view: 'action', type: 'submit'},
                            text: 'Зарегистрироваться'
                        }
                    ]
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