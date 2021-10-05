const express = require('express');
const router = express.Router();
const MateriaPrima = require('../models/materiaPrima');


router.get('/rawMaterials', async (req, res) => {

  try {
    const materiaPrima = await MateriaPrima.find({ });
    res.json({ error: false, materiaPrima });
    
  } catch (error) {
    res.json({ error: error, message: error.message });
  }
});

router.get('/rawMaterials/:id', async (req, res) => {

  try {
    const id = req.params.id;
    const materiaPrima = await MateriaPrima.findById(id);

    res.json({ error: false, materiaPrima });
    
  } catch (error) {
    res.json({ error: error, message: error.message });
  }
});


router.post('/rawMaterials', async (req, res) => {

  try {
    const materiaPrima = req.body;
    const response = await new MateriaPrima(materiaPrima).save();
    res.json({ error: false, materiaPrima: response });
  
  } catch (error) {
    res.json({ error: true, message: error.message }); 
  }
});

router.put('/rawMaterials/:id/request', async (req, res) => {
  try {
    const id = req.params.id;
    const materiaPrima = req.body;
    const atualizaMateriaPrima = await MateriaPrima.findByIdAndUpdate(id, materiaPrima);
    
    res.json({ error: false, atualizaMateriaPrima });

  } catch (error) {
    res.json({ error: true, message: error.message })
  }

});


module.exports = router;