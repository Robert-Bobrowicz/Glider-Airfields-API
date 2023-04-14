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

    };

    async deleteAirfield(req, res) {

    };
}

export const airfieldController = new AirfieldController();