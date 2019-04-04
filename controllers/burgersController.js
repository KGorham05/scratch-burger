const express = require('express');
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res)=> {

    burger.findAll(data => {
        res.render("burgers", {burgers: data})
    });
});

router.post("/api/burger", (req, res) => {
    burger.create(req.body, (data) => {
        res.redirect("/");
    })
});

// NOT WORKING 
router.put("/api/burger/:id", (req, res) => {

    const data = {
        eaten: true
    };
    
    burger.update(data, req.params.id, (data) => {
        res.json(data);
    })
})
module.exports = router;