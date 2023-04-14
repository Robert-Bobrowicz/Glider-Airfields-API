import { AirfieldDemo } from "../db/models/airfield.js";

class AirfieldController {
    async getAllAirfields(req, res) {
        const airfields = await AirfieldDemo.find({});
        res.json(airfields);
    };


}

export const airfieldController = new AirfieldController();