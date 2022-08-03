module.exports = app => {
    const patients =  require ("")
    var router = require ("express").Router();

    router.post("/",patients.create);

    router.get("/",patients.findAll);

    router.get("/:name",patients.findName)

}