const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const filiereScheme = new Schema(
    {
    filiere : {type : String, required : true}
    },
    {
    timestamps: true,
    });
const Filiere = mongoose.model('Filiere', filiereScheme);

module.exports = Filiere;

