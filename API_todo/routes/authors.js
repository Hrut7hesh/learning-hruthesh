var express = require('express');
var router = express.Router();
const Author = require("../models/authors");

const {body, validationResult} = require("express-validator");

router.post('/',[body("first_name").isLength({min:3}).withMessage("Min Length should be 3"),
    body("last_name").isLength({max:20}).withMessage("maxlength can't exceed 20 characrters"),
async function(req, res, next) {
  const errors = validationResult(req);
  if(errors.isEmpty()){
  let {first_name, last_name, dob, dod} = req.body;
  let authorOb = new Author({first_name, last_name, dob, dod});
  let result = await authorOb.save();
  res.json(result);
  } else{
    res.send(errors);
  }
}
]);
router.get('/', async function(req, res, next){
    let results = await Author.find();
    res.json(results)
});
router.delete('/:id',async function (req, res, next){
    let idToDelete = req.params.id;
    let result = await Author.findByIdAndDelete(idToDelete);
    res.json(result);
});
router.put('/:id',async function (req, res, next){
    let {first_name, last_name, dob, dod} = req.body;
    let result = await Author.findByIdAndUpdate(req.params.id, {first_name,last_name,dob,dod});
    res.json(result);
});

module.exports = router;