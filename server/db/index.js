/**
 * Created by AsTex on 25.02.2017.
 */
var MongoClient = require('mongodb').MongoClient;

var state = {
    db: null
};

exports.connect = function(url) {
    return new Promise(function (resolve, reject) {
        if (state.db) resolve();
        MongoClient.connect(url)
            .then(
                function (db) {
                    state.db = db;
                    resolve();
                }
            )
            .catch(
                function (error) {
                    reject(error);
                }
            )
    });
};

exports.get =  function(){
    return state.db;
};

exports.close = new Promise(function(resolve,reject){
    if(state.db) {
        state.db.close()
            .then(
                function(result){
                    state.db = null;
                    state.mode = null;
                    resolve(result);
                }
            )
            .catch(
                function(error){
                    reject(error);
                }
            )
    }
});