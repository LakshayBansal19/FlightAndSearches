const { where,Op} = require('sequelize');
const {City,Airport}=require('../models/index');
class cityRepository{
    async createCity({name}){
        try{
            const city=await City.create({name});
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            }
            );
            return true;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async createCities(citiesData){
        try{
            const cities=await City.bulkCreate(citiesData,{fields:['name']});
            return cities;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }

    }
    async updateCity(cityId,data){  //data is the object that needs to be put in place of old data
        try{
            // this commented approach also works but will not return updated object
            // const city=await City.update(data,{
            //     where:{              
            //         id:cityId
            //     }
            // });
            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;

        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }

    }
    async getCity(cityId){
        try{
            const city=await City.findByPk(cityId);
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAllCities(filter){
        try{
            if(filter.name){
                const cities=await City.findAll({
                    where:{
                        name:{
                            [ Op.startsWith]:filter.name
                        }
                    }
                });     
                return cities;
            }
            const cities=await City.findAll();
            return cities;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async getAirportsOfCity(cityId){
        //const city=await City.findByPk(cityId);
        try{
            const airports=await Airport.findAll({
                where:{
                    cityId:cityId
                }
            })
            return airports;

        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }

    }
}
module.exports=cityRepository;