import('../db/mongoDB/db-connection.js');
import { Airfield } from "../db/models/airfield.js";
import { app } from "../app/app.js";


//read all airfields from DB
const gliderAirfields = await Airfield.find({});
console.log(gliderAirfields.length);

app.listen(3000, () => console.log('server listens on port 3000.'));