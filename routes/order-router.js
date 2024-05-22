var express = require('express');
const {OrderPlacementController} = require("../controllers/order-placement-controller");
var router = express.Router();

router
    .post('/place-order', OrderPlacementController);

module.exports = router;
