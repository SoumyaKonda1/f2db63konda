const mongoose = require("mongoose")
const cerealSchema = mongoose.Schema({
    // cerealBrandName: String,
    // cerealFlavor: String,
    // price: Number

    cerealBrandName: {
        type: String,
        min: 1,
        max: 100
    },
    cerealFlavor: {
        type: String,
        min: 1,
        max: 100
    },
    price: {
        type: Number,
        min: 1,
        max: 100
    }
})
module.exports = mongoose.model("cereal", cerealSchema)