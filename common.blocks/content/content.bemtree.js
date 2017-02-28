block('content').content()(function() {
    console.log(this.data.view);
    return [
        {
            block:this.data.view
        }
    ]
});
