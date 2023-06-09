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
        const { name } = req.params;
        const airfield = await AirfieldDemo.findOne({ name });

        if (airfield) {
            if (req.body.name) airfield.name = req.body.name;
            if (req.body.city) airfield.city = req.body.city;
            if (req.body.latitude) airfield.latitude = req.body.latitude;
            if (req.body.longitude) airfield.longitude = req.body.longitude;
            if (req.body.aeroklub) airfield.aeroklub = req.body.aeroklub;
            if (req.body.icao_code) airfield.icao_code = req.body.icao_code;

            try {
                await airfield.save();
                res.status(200).json(airfield);
            } catch (e) {
                res.status(422).json({
                    errors: e.errors
                })
            };
        } else {
            console.log('Airfield not found in database.');
            res.status(422).json('Airfield not found in database.');
        }
    };

    async deleteAirfield(req, res) {
        const { name } = req.params;
        const airfield = await AirfieldDemo.findOne({ name });

        if (airfield) {
            await AirfieldDemo.deleteOne({ name });
            res.json(`Airfield: ${airfield.name} was deleted.`);
        } else {
            console.log('Airfield not found in database.');
            res.status(422).json({
                message: "Airfield can not be deleted."
            });
        }
    };
}

export const airfieldController = new AirfieldController();