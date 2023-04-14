import express from "express";

const router = new express.Router();

router.get('/airfields', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.send({
        title: "airfields for gliders"
    })
});

export { router };