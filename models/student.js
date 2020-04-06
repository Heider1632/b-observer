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

studentSchema.statics.getNotifications = function(charge, start, end) {
    return this.aggregate([
        {
            $match: { 'Charge' : mongoose.Types.ObjectId(charge) }
        },
        { 
            $lookup: { 
                from: 'observations', 
                localField: 'Observation', 
                foreignField: '_id',
                as: 'Observation'
            } 
        },
        {
            $unwind: '$Observation'
        },
        { 
            $project: {
                name: "$name",
                lastname: "$lastname",
                Observation: "$Observation",
                ObservationCreated : "$Observation.createdAt"
            }
        },
        // {
        //     $match: { 'Observation.read': false }
        // },
        // {
        //     $match: { 'ObservationCreated': { "$gte" : start, "$lt": end } }
        // },
        {
            $group: { _id : { name: "$name", lastname: "$lastname" }, Observation: { $push: "$Observation" } }
        },
        {
            $addFields: { 'numObservation': { $size: '$Observation' } }
        },
        {
            $match: { 'numObservation': { $gte: 3 } }
        },
    ])
};

const Student = mongoose.model('Student',studentSchema);
module.exports = Student;