import('../db/mongoDB/db-connection.js');
import { Airfield } from "../db/models/airfield.js";


//read all airfields from DB
const gliderAirfields = await Airfield.find({});
console.log(gliderAirfields.length);
