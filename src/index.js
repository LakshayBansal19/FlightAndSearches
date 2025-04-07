const express=require("express");
const bodyParser=require("body-parser");

const {City,Airport}=require('./models/index');
const db=require('./models/index');

const {PORT}=require('./config/serverConfig');

const ApiRoutes=require('./routes/index');

const setupAndStartServer=async()=>{
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',ApiRoutes);
    if(process.env.SYNC_DB){
        db.sequelize.sync({alter:true});
    }
    // const city=await City.findOne({
    //     where:{
    //         id:9
    //     },
    //     //include:Airport
    // })
    // const airport=await city.getAirports();
    // console.log(city.Airport);
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
    })
} 
setupAndStartServer();  