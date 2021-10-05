const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/materia-prima.routes');

const app = express();
const port = process.env.port || 3333;


app.use(bodyParser.json());
app.use('/', routes)

app.listen(port, () => {
  console.log('listening on port ' + port);
})