var express = require('express');
var router = express.Router();

/* GET music page. */
router.get('/', function(req, res, next) {
  res.render('cereal', { title: 'Search Results cereal Breakfast' });
});

module.exports = router; 