const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const Service = new Schema({
    title: {type: String},
    tags: {type: [String]},
    description:{type:String},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    postedBy: {type: Schema.Types.ObjectId, ref: 'User'},
    dateCreated: {type: Date, default: Date.now},
    price: {type: Number}
});

module.exports = Mongoose.model('Service', Service);