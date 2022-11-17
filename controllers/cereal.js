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
};
// for a specific cereal.
exports.cereal_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await cereal.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle cereal update form on PUT.
//‘bodyparser’
//if(req.body.checkboxsale) toUpdate.sale = true; else toUpdate.same = false;
exports.cereal_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await cereal.findById(req.params.id)
        // Do updates of properties
        if (req.body.cerealBrandName)
            toUpdate.cerealBrandName = req.body.cerealBrandName;
        if (req.body.cerealFlavor) toUpdate.cerealFlavor = req.body.cerealFlavor;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// Handle cereal delete on DELETE.
exports.cereal_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await cereal.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.cereal_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await cereal.findById(req.query.id)
        res.render('cerealdetail',
            { title: 'Cereal Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a cereal.
// No body, no in path parameter, no query.
// Does not need to be async
exports.cereal_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('cerealcreate', { title: 'Cereal Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a cereal.
// query provides the id
exports.cereal_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await cereal.findById(req.query.id)
        res.render('cerealupdate', { title: 'Cereal Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.cereal_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await cereal.findById(req.query.id)
        res.render('cerealdelete', {
            title: 'cereal Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};