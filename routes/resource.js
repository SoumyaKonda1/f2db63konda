var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var cereal_controller = require('../controllers/cereal');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/cereal', cereal_controller.cereal_create_post);
// DELETE request to delete Costume.
router.delete('/cereal/:id', cereal_controller.cereal_delete);
// PUT request to update Costume.
router.put('/cereal/:id', cereal_controller.cereal_update_put);
// GET request for one cereal.
router.get('/cereal/:id', cereal_controller.cereal_detail);
// GET request for list of all cereal items.
router.get('/cereal', cereal_controller.cereal_list);
module.exports = router;