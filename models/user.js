const mongoose  = require('mongoose');
const {Schema}  = require('mongoose');
const userSchema = new Schema({
    role: { type:String,maxlength:30, default: "teacher" },
    director: { type: Schema.Types.ObjectId, ref:"Charge" },
    name: { type:String,maxlength:50, unique:true, required:true},
    email: { type:String, maxlength:50, unique:true, required:true},
    password: { type:String, maxlength:64, required:true},
    Charge: [{
        type: Schema.Types.ObjectId,
        ref: "Charge"
    }]
}, { timestamps: true });

const User = mongoose.model('User',userSchema);
module.exports = User;