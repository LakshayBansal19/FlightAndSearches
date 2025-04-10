const {AirportRepository}=require('../repository/index');
const airportRepository=new AirportRepository();
class AirportService{
    async createAirport(data){
        try{
            const airport=await airportRepository.createAirport(data);
            return airport;
        }catch(error){
            console.log("Something went wrong at the service layer");
            throw{error};
        }
    }
    async createAirports(data){
        try{
            const airports=await airportRepository.createAirports(data);
            return airports;
        }catch(error){
            console.log("Something went wrong at the service layer");
            throw{error};
        }
    }
    async deleteAirport(airportId){
        try{
            const response=await airportRepository.deleteAirport(airportId);
            return response;
        }catch(error){
            console.log("Something went wrong at the service layer");
            throw{error};
        }
    }
    async deleteAllAirports(filter){
        try{
            const response=await airportRepository.deleteAllAirports({'name':filter.name});
            return response;
        }catch(error){
            console.log("Something went wrong at the service layer");
            throw{error};
        }
    }
    async updateAirport(airportId,data){
        try{
            const airport=await airportRepository.deleteAllAirports(airportId,data);
            return airport;
        }catch(error){
            console.log("Something went wrong at the service layer");
            throw{error};
        }
    }
    async getAirport(airportId){
        try{
            const airport=await airportRepository.getAirport(airportId);
            return airport;
        }catch(error){
            console.log("Something went wrong at the service layer");
            throw{error};
        }
    }
    async getAllAirports(filter){
        try{
            const airports=await airportRepository.getAllAirports({"name":filter.name});
            return airports;
        }catch(error){
            console.log("Something went wrong at the service layer");
            throw{error};
        }
    }
}
module.exports=AirportService;