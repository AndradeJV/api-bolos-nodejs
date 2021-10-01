const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/materia-prima.routes');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use('/', routes)

app.listen(port, () => {
  console.log('listening on port ' + port);
})