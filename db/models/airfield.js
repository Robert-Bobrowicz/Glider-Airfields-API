import mongoose from "mongoose";

const Schema = mongoose.Schema;
const airfieldSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    aeroclub: {
        type: String
    },
    icao_code: {
        type: String
    }
});  //{VersionKey: false} 

const Airfield = mongoose.model('airfield', airfieldSchema);
const AirfieldDemo = mongoose.model('demo-airfield', airfieldSchema);

export { Airfield, AirfieldDemo };