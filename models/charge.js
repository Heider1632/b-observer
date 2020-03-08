const mongoose  = require('mongoose');
const {Schema}  = require('mongoose');
const chargeSchema = new Schema({
    Grade: {
        type: Schema.Types.ObjectId,
        ref: "Grade"
    },
    Group: {
        type: Schema.Types.ObjectId,
        ref: "Group"
    },
    User: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Charge = mongoose.model('Charge',chargeSchema);
module.exports = Charge;