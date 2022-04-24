const express = require('express');
const Manager = require('../models/admin.model');

const router = express.Router();

router.post("/",async(req,res) => {
    try {
        const manager = await Manager.create(req.body);
        return res.status(201).send(manager);
    }catch(err) {
        return res.status(500).send(err.message);
    }
});

router.get("/",async(req, res)=>{
    try {
        const managers = await Manager.find().lean().exec();
        return res.status(200).send(managers);
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

module.exports = router;
