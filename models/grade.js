const mongoose  = require('mongoose');
const {Schema}  = require('mongoose');
const gradeSchema = new Schema({
    name: String
});

const Grade = mongoose.model('Grade',gradeSchema);
module.exports = Grade;