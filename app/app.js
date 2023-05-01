import express from "express";
import { router } from "../routes/api-routes.js"

const app = express();

//body parser
app.use(express.json());

//routes
app.use('/api', router);

export { app };