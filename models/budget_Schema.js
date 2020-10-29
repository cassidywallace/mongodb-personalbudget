const mongoose = require("mongoose")

//validate it is number
//validate if the value has been passed
//find by id --> document then the id is found else --> you may use this id
const budgetSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    budget: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
        maxlength: 6,
    },
}, { collection: 'mybudget'});

module.exports = mongoose.model('mybudget', budgetSchema);