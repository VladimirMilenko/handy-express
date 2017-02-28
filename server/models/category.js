const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const Category = new Schema({
    title:{type:String},
    icon:{type:String}
});

module.exports = Mongoose.model('Category', Category);