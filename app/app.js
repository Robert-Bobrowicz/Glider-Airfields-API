import express from "express";
import { router } from "../routes/api-routes.js"

const app = express();

app.use('/api', router);


export { app };