const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const etudiantScheme = new Schema(
    {
    cne : {type : String, required : true},
    cin : {type : String, required : true},
    nom : {type : String, required : true},
    prenom : {type : String, required : true},
    sexe_gender : {type : String, required : true},
    filiere : {type : String, required : true}
    },
    {
    timestamps: true,
    });
const Etudiant = mongoose.model('Etudiant', etudiantScheme);

module.exports = Etudiant;

