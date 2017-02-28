const Mongoose = require('mongoose');
const Hash = require('password-hash');
const Schema = Mongoose.Schema;

const User = new Schema({
    name:{type:String},
    rating:{type:String},
    likes:{type:String},
    dislikes:{type:String},
    username: {type: String},
    password: {
        type: String, set: function (newValue) {
            return Hash.isHashed(newValue) ? newValue : Hash.generate(newValue);
        }
    },
});


User.statics.authenticate = function (username, password) {
    let _this = this;
    return new Promise(function (onFinish, onError) {
        let findOne = _this.findOne({username: username}).exec();
        findOne
            .then(
                function (user) {
                    if (user && Hash.verify(password, user.password)) {
                        onFinish(user);
                    } else if (user) {
                        let error = new Error("Invalid login or password");
                        onError(error);
                    } else {
                        onError("502");
                    }
                }
            )
            .catch(function (err) {
                onError(err);
            });
    });

};

User.statics.register = function (model) {
    let _this = this;
    return new Promise(function (onFinish, onError) {
        _this.findOne({username: model.username}).exec()
            .then(function (user) {
                if (!user) {
                    model.save()
                        .then(function (user) {
                            onFinish(user)
                        })
                        .catch(function (error) {
                            onError(error);
                        })
                } else {
                    onError(new Error("Username already taken"));
                }
            })
            .catch(function (error) {
                onError(error);
            })
    });
};

module.exports = Mongoose.model('User', User);