import { airfieldsDemo } from "../glider-airfields/glider-airfields-demo-table.js";
import { AirfieldDemo } from "../models/airfield.js";
import('../../db/mongoDB/db-connection.js');
import mongoose from "mongoose";
import chalk from "chalk";

function populateDemoAirfields() {

    airfieldsDemo.forEach(async el => {
        const airfieldDemo = new AirfieldDemo(el);
        await airfieldDemo
            .save()
            .then(() => console.log(chalk.greenBright('DB has been populated with provided data.')))
            .catch(err => console.log('Upss... something went wrong.'));
    });

    return;
}

populateDemoAirfields();