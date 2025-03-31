const {City}=require('../models/index');
class cityRepository{
    async createCity({name}){
        try{
            const city=City.create({name});
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
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async updateCity(cityId,data){  //data is the object that needs to be put in place of old data
        try{
            const city=City.update(data,{
                where:{
                    id:cityId
                }
            });
            return city;

        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }

    }
    async getCity(cityId){
        try{
            const city=City.findByPk(cityId);
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports=cityRepository;