const express = require('express');
const router = express.Router();
const MateriaPrima = require('../models/materiaPrima');


router.get('/rawMaterials', async (req, res) => {

  try {

    const materiaPrima = await MateriaPrima.find({ });
    res.json({ error: true, materiaPrima });
    
  } catch (error) {
    res.json({ error: error, message: error.message });
  }


});

router.get('/rawMaterials?name/:name', (req, res) => {
  const name = req.params.id;
  res.json({ mensagem: `Teste ${name}` });
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


router.put('/rawMaterials/:id/request', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `${id}` });
});



module.exports = router;