const mongoose  = require('mongoose');
const {Schema}  = require('mongoose');
const observationSchema = new Schema({
    text: { type:String, required:true},
    type: { type:String, maxlength:50, required:true},
    read: { type: Boolean, default: false },
    Student: {
        type: Schema.Types.ObjectId,
        ref: "Student"
    },
    User: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

const Observation = mongoose.model('Observation',observationSchema);
module.exports = Observation;