import express from "express";
import { airfieldController } from "../controllers/airfields-controller.js";

const router = new express.Router();

router.get('/airfields', airfieldController.getAllAirfields);
router.post('/airfields', airfieldController.addAirfield);
router.put('/airfields/:name', airfieldController.editAirfield);
router.delete('/airfields/:name', airfieldController.deleteAirfield);

export { router };