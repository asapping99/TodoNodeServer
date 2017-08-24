var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    status: Boolean,
    content: String
}, {
    collection: 'Todo'
});

module.exports = mongoose.model('todo', todoSchema);