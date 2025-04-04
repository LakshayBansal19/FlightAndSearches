const {CityService}=require('../services/index');

const cityService=new CityService();

//POST->req.body
const create=async (req,res)=>{
    try{
        const city=cityService.createCity(req.body);
        return res.status(201).json({
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
//DELETE -> 'city/:id'
const destroy=async (req,res)=>{
    try{
        const response=cityService.deleteCity(req.params.id);
        return res.status(201).json({
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
        const city=cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
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
        const city=cityService.getCity(req.params.id);
        return res.status(201).json({
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
module.exports={
    create,
    destroy,
    update,
    get
}