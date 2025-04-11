const {Flight}=require('../models/index');
const {Op}=require('sequelize')

class FlightRepository{

    #createFilter(data){
        let filter={};
        if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId;
        }
        let priceFilter=[];
        if(data.minPrice){
            priceFilter.push({price:{[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price:{[Op.lte]:data.maxPrice}});
        }
        //if(data.minPrice  || data.maxPrice){
            Object.assign(filter,{[Op.and]:priceFilter});
        
        return filter;
    }
    /**where:{
    *     price:{
    *         [op.end ]:{[Op.gte]:minPrice},{[Op.lte]:maxPrice}
    *     }
    * }
    */
    async createFlight(data){
        try{
            const flight=await Flight.create(data);
            return flight;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
        
    }
    async getFlight(flightId){
        try{
            const flight=await Flight.findByPk(flightId);
            return flight;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAllFlights(filter){
        try{
            const flight=await Flight.findAll({
                where:this.#createFilter(filter)
            });
            return flight;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports=FlightRepository;