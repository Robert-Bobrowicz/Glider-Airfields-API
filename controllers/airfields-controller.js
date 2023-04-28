import { AirfieldDemo } from "../db/models/airfield.js";

class AirfieldController {
    async getAllAirfields(req, res) {
        const airfields = await AirfieldDemo.find({});
        res.json(airfields);
    };

    async addAirfield(req, res) {
        res.json('add airfield');
    };

    async editAirfield(req, res) {
        res.json('edit and save changes for the airfield');
    };

    async deleteAirfield(req, res) {
        res, json('airfield deleted');
    };
}

export const airfieldController = new AirfieldController();