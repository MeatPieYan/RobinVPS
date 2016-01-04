var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send("hello");
  res.sendFile(path.join(__dirname, '../app', 'index.html'));
});

module.exports = router;
