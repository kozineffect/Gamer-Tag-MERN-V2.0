var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var user = require("../../../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  user.all(function(data) {
    var hbsObject = {
      users: data
    };
    console.log(hbsObject);
    res.render("create_user", hbsObject);
  });
});

// Export routes for server.js to use.
module.exports = router;

