const mongoose  = require('mongoose');
const {Schema}  = require('mongoose');
const usuarioSchema = new Schema({
    role: { type:String,maxlength:30, default: "teacher" },
    name: { type:String,maxlength:50, unique:true, required:true},
    email: { type:String, maxlength:50, unique:true, required:true},
    password: { type:String, maxlength:64, required:true},
    Charge: [{
        type: Schema.Types.ObjectId,
        ref: "Charge"
    }]
}, { timestamps: true });

const Usuario = mongoose.model('User',usuarioSchema);
module.exports = Usuario;