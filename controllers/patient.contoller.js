const Patient = require ("../models/patients.model.js");

exports.create = (req,res) => {
    
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty"
        });
    }
    const tutorial = new Patient ({
        patientId:req.body.patientId,
        name:req.body.name,
        dob:req.body.dob,
        gender:req.body.gender,
        phoneNumber:req.body.phoneNumber,
        dateCreated:req.body.dateCreated
    })

    Patient.create(patient, (err, data)=> {
        if(err)
         res.status(500).send({
            message:err.message || "Some error occurred while creating a Patient"
         });
         else res.send(data);
    });
};
exports.findAll = (req,res) => {
    const name = req.query.name;

    Patient.getAll(name, (err,data)=> {
        if(err)
        res.status(500).send({
            message:
               err.message || "Some error occured while retrieving patients"
        })
    })

}
exports.findName = (req,res) => {

}