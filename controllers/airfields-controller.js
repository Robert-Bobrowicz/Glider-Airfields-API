import { AirfieldDemo } from "../db/models/airfield.js";

class AirfieldController {
    async getAllAirfields(req, res) {
        const airfields = await AirfieldDemo.find({});
        res.json(airfields);
    };

    async addAirfield(req, res) {
        // console.log(req.body);
        const airfield = new AirfieldDemo({
            name: req.body.name,
            city: req.body.city,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            aeroklub: req.body.aeroklub,
            icao_code: req.body.icao_code
        });

        res.status(201).json(airfield);
    };

    async editAirfield(req, res) {
        res.json('edit and save changes for the airfield');
    };

    async deleteAirfield(req, res) {
        res.json('airfield deleted');
    };
}

export const airfieldController = new AirfieldController();