block('create-service')(
    content()(function(ctx){
        return {
            block:'form',
            mix:[{block:'widget',mods:{type:'register'}}],
            tag:'form',
            attrs:{
                method:'post'
            },
            mods:{
                theme:'islands'
            },
            content:[
                {
                    elem:'title',
                    content:'Создание услуги',
                    tag:'h2'
                },
                {
                    block:'form-control',
                    content:[
                        {
                            block:'form-control',
                            elem:'label',
                            content:'Название'
                        },
                        {
                            block:'input',
                            name:'title',
                            mods:{
                                size:'m',
                                theme:'islands',
                                width:'abailable',
                                'has-clear':true
                            },
                            autocomplete:false
                        }
                    ]
                },
                {
                    block:'form-control',
                    content:[
                        {
                            block:'form-control',
                            elem:'label',
                            content:'Категория'
                        },
                        {
                            block:'select',
                            mods:{mode:'radio',theme:'islands',size:'m'},
                            name:'category',
                            val:ctx.data.categories[0].val,
                            options: ctx.data.categories
                        }
                    ]
                },
                {
                    block:'form-control',
                    content:[
                        {
                            block:'form-control',
                            elem:'label',
                            content:'Цена в рублях за час работы'
                        },
                        {
                            block:'input',
                            name:'price',
                            mods:{size:'m',theme:'islands'},
                            autocomplete:false
                        }
                    ]
                },
                {
                    block:'form-control',
                    content:[
                        {
                            block:'form-control',
                            elem:'label',
                            content:'Описание'
                        },
                        {
                            block:'textarea',
                            name:'description',
                            mods:{size:'m',theme:'islands',width:'available'},
                            placeholder:'Описание услуги'
                        }
                    ]
                },
                {
                    block:'form-control',
                    content:[
                        {
                            block:'form-control',
                            elem:'label',
                            content:'Теги'
                        },
                        {
                            block:'textarea',
                            name:'tags',
                            mods:{size:'m',theme:'islands',width:'available'},
                            placeholder:'Вводите теги через запятую'
                        }
                    ]
                },
                {
                    block:'csrf',
                    tag:'input',
                    attrs:{
                        name:'_csrf',
                        type:'hidden',
                        value:ctx.data.csrf
                    }
                },
                {
                    block: 'register-form',
                    elem:'submit',
                    content:[
                        {
                            block:'button',
                            mods: {theme: 'islands', size: 'l', view: 'action', type: 'submit'},
                            text: 'Создать'
                        }
                    ]
                },
            ]
        }
    })
);