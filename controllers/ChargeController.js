const models   = require('../models');
const mongoose   = require('mongoose');

module.exports = {
    addCharge: async (req,res,next) =>{
        try {

            const reg = await models.Charge.create({
                _id: new mongoose.Types.ObjectId(),
                ...req.body
            });

            if(reg){

                res.status(200).json(reg);
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
    addGrade: async (req,res,next) =>{
        try {

            const reg = await models.Grade.create({
                _id: new mongoose.Types.ObjectId(),
                ...req.body
            });

            if(reg){

                res.status(200).json(reg);
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
    addGroup: async (req,res,next) =>{
        try {

            const reg = await models.Group.create({
                _id: new mongoose.Types.ObjectId(),
                ...req.body
            });

            if(reg){

                res.status(200).json(reg);
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
    queryCharge: async (req,res,next) => {
        try {
            const reg=await models.Charge.findOne({_id:req.query._id}).populate('Grade Group User');
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
    queryGrade: async (req,res,next) => {
        try {
            const reg=await models.Grade.findOne({_id:req.query._id});
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
    queryGroup: async (req,res,next) => {
        try {
            const reg=await models.Group.findOne({_id:req.query._id});
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
    listCharge: async (req,res,next) => {
        try {
            const reg=await models.Charge.find({$or:[{'User': req.query.user },{'Grade': req.query.grade }]})
            .sort({'createdAt':-1});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    listGrade: async (req,res,next) => {
        try {
            const reg=await models.Grade.find()
            .sort({'createdAt':-1});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    listGroup: async (req,res,next) => {
        try {
            const reg=await models.Group.find()
            .sort({'createdAt':-1});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    updateCharge: async (req,res,next) => {
        try {             
            const reg = await models.Charge.findByIdAndUpdate(...req.body);
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    },
    removeCharge: async (req,res,next) => {
        try {
            const reg = await models.Charge.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        } catch(e){
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }
    }
}
