block('page-index')(
    content()(function (ctx) {
        let data = ctx.data.pageData;
        let resultContent = [];
        for (let i = 0;i<data.length;i++) {
            let obj = data[i];
            let catBlock = {
                block: 'category',
                content: []
            };
            let previewElem = {
                elem: 'preview',
                content: [
                    obj.category.title,
                    {
                        block: 'material-icons',
                        content: obj.category.icon
                    }
                ]
            };
            let wrapperElem = {
                elem: 'wrapper',
                content: []
            };
            for (let service of obj.services) {
                wrapperElem.content.push({
                    block: 'card',
                    title: service.postedBy.name,
                    rating: service.postedBy.rating,
                    description: service.description,
                    tags: service.tags,
                    price: 'от ' + service.price + 'р',
                    like: service.postedBy.likes,
                    dislike: service.postedBy.dislikes
                });
            }
            if((i+1) % 2 === 0){
                catBlock.content.push(wrapperElem);
                catBlock.content.push(previewElem);
            } else{
                catBlock.content.push(previewElem);
                catBlock.content.push(wrapperElem);
            }
            resultContent.push(catBlock);
        }
        return resultContent;
    })
);