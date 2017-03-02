block('content')(
    content()(function(){
        return [
            {
                block:this.data.view,
                js:true
            }
        ]
    })
);