const sql = require ("./db.js");

const Patients = function(patients) {
    this.id = patients.id;
    this.name = patients.name;
    this.dob = patients.dob;
    this.gender = patients.gender;
    this.phone_number =patients.phone_number;
    this.date_created =  patients.date_created; 
};
//creating a new patient
Patients.create = (newPatients, result) => {
  sql.query("INSERT INTO patient SET?" ,  newPatients, (err,res) =>{
    if (err) {
        console.log("error:" , err);
        result(err,null);
        return;
    }
     console.log("created patient:", {id: res.insertId,...newPatients});
     result(null, {id: res.insertId, ...newPatients})
  });

//Find Patient by name
sql.query(`SELECT * FROM patient WHERE name = ${name}`, (err,res)=>{
    if(err){
        console.log("error:", err);
        result(err,null);
        return;
    }
    if(res.length){
        console.log("found patient:",res[0]);
        result(null,res[0]);
        return;
    }
    result({kind: "not_found"}, null);
});
};

