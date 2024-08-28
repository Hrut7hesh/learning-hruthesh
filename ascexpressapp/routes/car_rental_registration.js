const express = require('express');
const router = express.Router();
const carController = require("../controllers/carusers")


router.get('/', carController.index);

router.get('/:id', carController.getCarUser);

router.post('/', carController.postCarUser);

router.put('/:id', carController.putCarUser);

router.patch('/:id', carController.patchCarUser);

router.delete('/:id', carController.deleteCarUser);

module.exports = router;
