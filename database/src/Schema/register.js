const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
    api: {
        type: Object
    },
    date: {
        type: String
    }
})

const ApiSchema = new mongoose.model("apidata", apiSchema);

module.exports = ApiSchema;