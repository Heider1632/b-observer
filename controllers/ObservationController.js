const models   = require('../models');
const mongoose   = require('mongoose');

module.exports = {
    add: async (req,res,next) =>{
        try {

            const reg = await models.Observation.create({
                _id: new mongoose.Types.ObjectId(),
                ...req.body
            });

            if(reg){
                await models.Student.findByIdAndUpdate().exec( (err, res) => {
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
    list: async (req,res,next) => {
        try {
            const reg=await models.Observation.find({$or:[{'Student': req.query.user },{'Charge': req.query.charge }]})
            .sort({'createdAt':-1});
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
