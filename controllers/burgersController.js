const express = require('express');
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res)=> {
    burger.findAll(data => res.render("burgers", {burgers: data}))
});

module.exports = router;