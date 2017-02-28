block('page-error')(
    content()(function(ctx){
        return {
            block:'error',
            content:ctx.data.error
        }
    })
);