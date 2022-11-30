var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('cereal', { title: 'Search Results cereal Breakfast' });
});
var express = require('express');
const cereal_controllers = require('../controllers/cereal');
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
var router = express.Router();
/* GET costumes */
router.get('/', cereal_controllers.cereal_view_all_Page);

/* GET detail cereal page */
router.get('/detail', cereal_controllers.cereal_view_one_Page);
// /* GET create cereal page */
// router.get('/create', cereal_controllers.cereal_create_Page);
/* GET create cereal page */
router.get('/create', secured, cereal_controllers.cereal_create_Page);
// /* GET create update page */
// router.get('/update', cereal_controllers.cereal_update_Page);

/* GET create update page */
router.get('/update', secured, cereal_controllers.cereal_update_Page);

// /* GET delete cereal page */
// router.get('/delete', cereal_controllers.cereal_delete_Page);
/* GET delete cereal page */
router.get('/delete', secured, cereal_controllers.cereal_delete_Page);

// /* GET update costume page */
// router.get('/update', cereal_controllers.costume_update_Page);

// /* GET update costume page */
// router.get('/update', secured, cereal_controllers.costume_update_Page);

module.exports = router;