const express = require("express");

const {createDetails,allData}  = require("../controllers/detailsController");
const router = express.Router();
router.route("/").get(allData);
router.route("/").post(createDetails);


module.exports = router;
