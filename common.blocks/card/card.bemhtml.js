block('card')(
    content()(function() {
        return [
            {
                elem: 'header',
                content: [
                    {
                        elem: 'title',
                        content: this.ctx.title
                    },
                    {
                        elem: 'rating',
                        elemMods: { value: 'v' + this.ctx.rating },
                        content: this.ctx.rating
                    }
                ]
            },
            {
                elem: 'body',
                content: [
                    {
                        elem: 'description',
                        content: this.ctx.description
                    },
                    {
                        elem: 'tags',
                        tags: this.ctx.tags
                    }
                ]
            },
            {
                elem: 'footer',
                content: [
                    {
                        elem: 'price',
                        content: this.ctx.price
                    },
                    {
                        elem: 'comment',
                        tag: 'span',
                        content: [
                            {
                                elem: 'like',
                                tag: 'span',
                                content: '+' + this.ctx.like
                            },
                            {
                                block: 'material-icons',
                                content: 'comment'
                            },
                            {
                                elem: 'dislike',
                                tag: 'span',
                                content: '-' + this.ctx.dislike
                            }
                        ]
                    }
                ]
            }
        ];
    }),

    elem('header').tag()('header'),

    elem('body').tag()('section'),

    elem('footer').tag()('footer'),

    elem('title').tag()('h3'),

    elem('tags')(
        content()(function(){
            return this.ctx.tags.map(function(tag){
                return {
                    block: 'link',
                    mix: [{ block: 'tag' }],
                    content: '#' + tag,
                    url: '#'
                }
            });
        })
    ),

    elem('price').tag()('span')
);
