const models = require('../models');
const mongoose = require('mongoose');
const moment = require("moment");
const _ = require("lodash")

module.exports = {
    add: async (req,res,next) =>{
        try {

            const reg = await models.Observation.create({
                _id: new mongoose.Types.ObjectId(),
                ...req.body
            });

            if(reg){
                await models.Student.findOneAndUpdate({ _id : req.body.Student }, { $push: { "Observation" : reg._id } }, { new: true }).exec( (err, user ) => {
                    if (err) throw err;
                    res.status(200).json(reg);
                })
                
            }else{
                res.status(500).send({
                    message:'Ocurrió un error'
                });
                next(e); 
            }
            
        } catch (e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    query: async (req,res,next) => {
        try {
            const reg=await models.Observation.findOne({_id:req.query._id});
            if (!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else{
                res.status(200).json(reg);
            }
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    notifications: async (req,res,next) => {

        try {

            var notifications = [];

            var start = moment().startOf('month').toDate(); 
            var end = moment().endOf('month').toDate();

            const reg = await models.Student.getNotifications(req.query.charge, start, end);

            if(reg.length !== 0){
                reg.map((student, index) => {
                    notifications.push({
                        name: student._id.name + " " + student._id.lastname,
                        body: 'El siguiente estudiante tiene una alerta por varias observaciones',
                        Observations: []
                    })

                    student.Observation.map(ob => {
                        notifications[index].Observations.push({ _id: ob._id, text: ob.text })
                    })

                })
            }

            res.status(200).json(notifications);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    list: async (req,res,next) => {

        try {

            if (req.query.date){
                let { year, month, day } = req.query.date;

                var reg=await models.Observation.find({ createdAt : { $lt : new Date(parseInt(year), parseInt(month), parseInt(day)).toISOString() }})
                .populate('Student User')
                .sort({'createdAt':-1});

            } else {

                var start = moment().startOf('day'); // set to 12:00 am today
                var end = moment().endOf('day');

                var reg=await models.Observation.find({ createdAt : { $gte: start, $lt: end }})
                .populate('Student User')
                .sort({'createdAt':-1});
            }

            if (reg.length !== 0){
                reg.filter(observation => observation.Student.Charge == req.query.charge)
            }

            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    update: async (req,res,next) => {
        try {             
            const reg = await models.Observation.findByIdAndUpdate(...req.body);
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    remove: async (req,res,next) => {
        try {
            const reg = await models.Observation.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    }
}
