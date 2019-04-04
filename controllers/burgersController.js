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
    });
});

router.put("/api/burger/:id", (req, res) => {
    const recAsObj = {
        eaten: true
    };
    burger.eatIt(recAsObj, req.params.id, (data) => {
        res.json(data);
    })
});

router.delete("/api/delete/:id", (req, res) => {
    burger.delete(req.params.id, (data) => res.json(data))
});

module.exports = router;