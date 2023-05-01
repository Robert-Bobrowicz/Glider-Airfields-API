import { AirfieldDemo } from "../db/models/airfield.js";

class AirfieldController {
    async getAllAirfields(req, res) {
        const airfields = await AirfieldDemo.find({});
        res.json(airfields);
    };

    async addAirfield(req, res) {
        const airfield = new AirfieldDemo({
            name: req.body.name,
            city: req.body.city,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            aeroklub: req.body.aeroklub,
            icao_code: req.body.icao_code
        });

        try {
            await airfield.save();
            res.status(201).json(airfield);
        } catch (e) {
            res.status(422).json({
                errors: e.errors
            })
        };
    };

    async editAirfield(req, res) {
        res.json('edit and save changes for the airfield');
    };

    async deleteAirfield(req, res) {
        res.json('airfield deleted');
    };
}

export const airfieldController = new AirfieldController();