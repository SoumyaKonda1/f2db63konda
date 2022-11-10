var cereal = require('../models/cereal');
// List of all Costumes
exports.cereal_list = function (req, res) {
    res.send('NOT IMPLEMENTED: cereal list');
};
// for a specific Costume.
exports.cereal_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: cereal detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.cereal_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: cereal create POST');
};
// Handle Costume delete form on DELETE.
exports.cereal_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: cereal delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.cereal_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: cereal update PUT' + req.params.id);
};
// VIEWS

// List of all Costumes
exports.cereal_list = async function (req, res) {
    try {
        thecereal = await cereal.find();
        res.send(thecereal);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.cereal_view_all_Page = async function (req, res) {
    try {
        thecereal = await cereal.find();
        res.render('cereal', { title: 'cereal Search Results', results: thecereal });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Costume create on POST.
exports.cereal_create_post = async function (req, res) {
    console.log(req.body)
    let document = new cereal();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.cerealBrandName = req.body.cerealBrandName;
    document.cerealFlavor = req.body.cerealFlavor;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}