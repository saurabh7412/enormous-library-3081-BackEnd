const express = require("express");

const router = express.Router();

const Tours = require("../Models/tourModel");


router.post("/", async (req, res) => {
  try {

    const newTour = await Tours.create(req.body);

    return res.status(200).send({ msg: "Your Tour got Scheduled !", newTour});
    
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;