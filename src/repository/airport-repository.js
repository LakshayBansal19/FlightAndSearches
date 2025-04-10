const {Airport}=require('../models/index');
const{Op}=require('sequelize');

class AirportRepository{
    async createAirport(data){
        try{
            const airport=await Airport.create(data);
            return airport;
        }catch(error){
            console.log("Something went wrong at the repository layer");
            throw {error};
        }
    }
    async createAirports(data){
        try{
            const airports=await Airport.bulkCreate(data);
            return airports;
        }catch(error){
            console.log("Something went wrong at the repository layer");
            throw {error};
        }
    }
    async deleteAirport(airportId){
        try{
            await Airport.destroy({
                where:{
                    id:airportId
                }
            });
            return true;
        }catch(error){
            console.log("Something went wrong at the repository layer");
            throw {error};
        }
    }
    async deleteAllAirports(filter){
        try{
            if(filter.name){
                await Airport.destroy({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                });
                return true;
            }
            await Airport.truncate();
            return true;
        }catch(error){
            console.log("Something went wrong at the repository layer");
            throw {error};
        }
    }
    async updateAirport(airportId,data){
        try{
            const airport=await Airport.update(data,{
                where:{
                    id:airportId
                }
            });
            return airport;
        }catch(error){
            console.log("Something went wrong at the repository layer");
            throw {error};
        }
    }
    async getAirport(airportId){
        try{
            const airport=await Airport.findByPk(airportId);
            return airport;
        }catch(error){
            console.log("Something went wrong at the repository layer");
            throw {error};
        }
    }
    async getAllAirports(filter){
        try{
            if(filter.name){
                const airports=await Airport.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                })
                return airports;
            }
            const airports=await Airport.findAll();
            return airports;
        }catch(error){
            console.log("Something went wrong at the repository layer");
            throw {error};
        }
    }
}
module.exports=AirportRepository;