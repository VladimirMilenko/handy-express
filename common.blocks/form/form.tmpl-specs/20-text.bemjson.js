({
    block : 'form',
    mods :  { 'has-validation' : true, message : 'text' },
    mix :  { block : 'another-block' },
    attrs :  { 'data-form' : 'custom form data' },
    action : '/parse-form-data-on-back-end',
    method : 'POST',
    enctype : 'multipart/form-data',
    content : []
});
