const express = require('express');
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res)=> {

    burger.findAll(data => {
        res.render("burgers", {burgers: data})
    });
});

router.post("/api/burger", (req, res) => {
    console.log(req.body);
    burger.create([name], req.body.name, (data) => {
        res.json({
            message: "Burger Added!",
            data: data
        })
    })
})
module.exports = router;