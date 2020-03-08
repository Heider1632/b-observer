const mongoose  = require('mongoose');
const {Schema}  = require('mongoose');
const groupSchema = new Schema({
    name: String
});

const Group = mongoose.model('Group',groupSchema);
module.exports = Group;