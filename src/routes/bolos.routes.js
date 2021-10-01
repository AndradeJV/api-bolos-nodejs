const express = require('express');
const router = express.Router();


router.post('/rawMaterials', (req, res) => {
  res.send('Teste de rota');
});



module.exports = router;