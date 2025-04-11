const {CityService}=require('../services/index');

const {SuccessCodes}=require('../utils/error-codes');

const cityService=new CityService();

//POST->req.body
const create=async (req,res)=>{
    try{
        const city=await cityService.createCity(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data:city,
            success:true,
            message:"successfully created a city",
            err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a city",
            err:error
        });
    }
}
const createAll=async (req,res)=>{
    try{
        const cities=await cityService.createCities(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data:cities,
            success:true,
            message:"successfully created the cities",
            err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a city",
            err:error
        });
    }
}
//DELETE -> 'city/:id'
const destroy=async (req,res)=>{
    try{
        const response=await cityService.deleteCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            message:"successfully deleted a city",
            err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete the city",
            err:error
        });
    }
}
//Patch->'city/:id'
const update=async (req,res)=>{
    try{
        const city=await cityService.updateCity(req.params.id,req.body);
        return res.status(SuccessCodes.OK).json({
            data:city,
            success:true,
            message:"successfully updated the city",
            err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update the city",
            err:error
        });
    }
}
//GET
const get=async (req,res)=>{
    try{
        const city=await cityService.getCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:city,
            success:true,
            message:"successfully fetched the city",
            err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to retrieve the city",
            err:error
        });
    }
}
const getAll=async(req,res)=>{
    try{
        const cities=await cityService.getAllCities(req.query);
        return res.status(SuccessCodes.OK).json({
            data:cities,
            success:true,
            message:"successfully fetched the cities",
            err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to retrieve the cities",
            err:error
        });
    }
}
const getAirports=async (req,res)=>{
    try{
        const airports=await cityService.getAirportsOfCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:airports,
            success:true,
            message:"successfully fetched the airports",
            err:{}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to retrieve the airports",
            err:error
        });
    }
}
module.exports={
    create,
    createAll,
    destroy,
    update,
    get,
    getAll,
    getAirports
}