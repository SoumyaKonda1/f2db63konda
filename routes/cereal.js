var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cereal', { title: 'Search Results cereal Breakfast' });
});
var express = require('express');
const cereal_controllers= require('../controllers/cereal');
var router = express.Router();
/* GET costumes */
router.get('/', cereal_controllers.cereal_view_all_Page );
module.exports = router;