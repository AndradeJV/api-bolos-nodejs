const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bolos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const MateriaPrima = mongoose.model('MateriaPrima', {
  id: {
    type: Number,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  user: {
    type: String,
    required: true,
  },

  createDate: {
    type: Date,
  }

});

module.exports = MateriaPrima;