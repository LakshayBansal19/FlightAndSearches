const {FlightService}=require('../services/index');

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
        return res.status(201).json({
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
        return res.status(201).json({
            data:flights,
            success:true,
            message:"Successfully fetched all the the flights",
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
module.exports={
    create,
    getAll
}