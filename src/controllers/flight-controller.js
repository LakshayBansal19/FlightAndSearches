const {FlightService}=require('../services/index');

const {SuccessCodes}=require('../utils/error-codes');

const flightService=new FlightService();

const create=async (req,res)=>{
    try{
        const flightRequestData={
            flightNumbe:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price
        }
        if(req.body.boardingGate){
            flightRequestData.boardingGate=req.body.boardingGate;
        }
        const flight=await  flightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            message:"Successfully created the flight",
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create the flight",
            err:error
        });
    }

}
const getAll=async (req,res)=>{
    try{
        const flights=await  flightService.getAllFlights(req.body);
        return res.status(SuccessCodes.OK).json({
            data:flights,
            success:true,
            message:"Successfully fetched all the flights",
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to retrieve the flights",
            err:error
        });
    }
}
const get=async(req,res)=>{
    try{
        const flight=await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:flight,
            success:true,
            message:"Successfully fetched the flight",
            err:{}
        })
    }catch(error){
        console.log(error);
    return res.status(500).json({
        data:{},
        success:false,
        message:"Not able to retrieve the flight",
        err:error
    });
    }
}
const update=async(req,res)=>{
    try{
        const flight=await flightService.updateFlight(req.params.id,req.body);
        return res.status(SuccessCodes.OK).json({
            data:flight,
            success:true,
            message:"Successfully updated the flight",
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update the flight",
            err:error
        });
    }
}
module.exports={
    create,
    getAll,
    get,
    update
}