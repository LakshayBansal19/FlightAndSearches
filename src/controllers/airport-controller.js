const { response } = require("express");
const{AirportService}=require("../services/index");
const {SuccessCodes}=require('../utils/error-codes');
const airportService=new AirportService();

const create=async(req,res)=>{
    try{
        const airport=await airportService.createAirport(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data:airport,
            success:true,
            message:"Successfully created the airport",
            err:{}  
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create the airport",
            err:error
        })
    }
}
const createAll=async(req,res)=>{
    try{
        const airports=await airportService.createAirports(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data:airports,
            success:true,
            message:"Successfully created the airports",
            err:{}  
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create the airports",
            err:error
        })
    }
}
const destroy=async(req,res)=>{
    try{
        const response=await airportService.deleteAirport(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:"Successfully deleted the airport",
            err:{}  
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete the airport",
            err:error
        })
    }
}
const destroyAll=async(req,res)=>{
    try{
        const response=await airportService.deleteAllAirports(req.query);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:"Successfully deleted the airports",
            err:{}  
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete the airports",
            err:error
        })
    }
}
const update=async(req,res)=>{
    try{
        const airport=await airportService.updateAirport(req.params.id,req.body);
        return res.status(SuccessCodes.OK).json({
            data:airport,
            success:true,
            message:"Successfully fetched the airport",
            err:{}  
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to retrieve the airport",
            err:error
        })
    }
}
const get=async(req,res)=>{
    try{
        const airport=await airportService.getAirport(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:airport,
            success:true,
            message:"Successfully fetched the airport",
            err:{}  
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to retrieve the airport",
            err:error
        })
    }
}
const getAll=async(req,res)=>{
    try{
        const airport=await airportService.getAllAirports(req.query);
        return res.status(SuccessCodes.OK).json({
            data:airport,
            success:true,
            message:"Successfully fetched the airport",
            err:{}  
        })
    }catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to retrieve the airport",
            err:error
        })
    }
}
module.exports={
    create,
    createAll,
    destroy,
    destroyAll,
    get,
    getAll,
    update
};