

const express = require("express");

const router = express.Router();

const refInfo = require("../Models/reqInfoModel");


router.post("/", async (req, res) => {
  try {

    const newReq = await refInfo.create(req.body);

    return res.status(200).send({ msg: "Your Request will be sent to provided Email !", newReq});
    
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;