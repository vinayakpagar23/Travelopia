const mongoose = require("mongoose");

const detailsSchema = mongoose.Schema(
    {
        name:{type:"String", required:true},
        email:{type:"String", required:true,unique:true},
        destination:{type:"String",required:true},
        no_of_travellers:{type:"Number", required:true},
        budgetPerPerson:{type:"Number",required:true},
        totalBudget:{type:"Number",required:true},
    },
    {
        timestamps:true
    },
);

const Details = mongoose.model("Details",detailsSchema);

module.exports = Details;