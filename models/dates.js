const mongoose = require('mongoose');

const DateSchema = mongoose.Schema({
    date:{
        type: String,
        required: true
    }
});

const Dates = module.exports = mongoose.model('Dates',DateSchema);