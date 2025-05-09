const express=require('express');

const {FlightMiddlewares}=require('../../middlewares/index');

const CityController=require('../../controllers/city-controller');
const AirportController=require('../../controllers/airport-controller');
const FlightController=require('../../controllers/flight-controller');
const router=express.Router();

router.post('/city',CityController.create);
router.post('/cities',CityController.createAll);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getAll);
router.get('/city/:id',CityController.get);
router.get('/airport/city/:id',CityController.getAirports);

//Airport
router.post('/airport',AirportController.create);
router.post('/airports',AirportController.createAll);

router.delete('/airport/:id',AirportController.destroy);
router.delete('/airport',AirportController.destroyAll);

router.patch('/airport/:id',AirportController.update);

router.get('/airport/:id',AirportController.get);
router.get('/airport',AirportController.getAll);

//flight
router.post('/flight',FlightMiddlewares.validateCreateFlight,FlightController.create);
router.get('/flights',FlightController.getAll);
router.get('/flight/:id',FlightController.get);
router.patch('/flight/:id',FlightController.update);



module.exports=router;