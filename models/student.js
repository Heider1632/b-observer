const mongoose  = require('mongoose');
const {Schema}  = require('mongoose');
const studentSchema = new Schema({
    name: { type:String,maxlength:30, required: true },
    lastname: { type:String,maxlength:50, required:true},
    age: { type:Number, maxlength: 3 },
    identification: { type:Number, maxlength:12, required:true},
    Charge: {
        type: Schema.Types.ObjectId,
        ref: "Charge"
    },
    Observation: [{
        type: Schema.Types.ObjectId,
        ref: "Observation"
    }]
}, { timestamps: true });

const Student = mongoose.model('Student',studentSchema);
module.exports = Student;