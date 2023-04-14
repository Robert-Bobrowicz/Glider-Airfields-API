import express from "express";
import { airfieldController } from "../controllers/airfields-controller.js";

const router = new express.Router();

router.get('/airfields', airfieldController.getAllAirfields);

export { router };