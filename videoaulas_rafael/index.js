const morgan = require('morgan');
require('dotenv').config()

const Produto = require('./produto')

const express = require('express');
const mongoose = require('mongoose');
// permite usar duas portas ou mais (servidor):
const cors = require('cors');
const app = express();
//utilizando a porta atual que está contida no arquivo ".env" deste projeto:
const port = process.env.PORT;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan('dev'));
app.use(cors());


app.post('/produtos', async(req, res) => {

  const text = req.body.text;
  const createdTodo = await Produto.create({ 
    text,
    isDone: false,
   });
  
  return res.json(createdTodo);
  });

app.get('/produtos/:id', async(req, res) => {

  const id = req.params.id;
  const produto = await Produto.findOne({_id: id }).exec();
  
  return res.json(produto);
});


app.get('/produtos', async(req, res) => {

  const produtos = await Produto.find({});
  // find all documents

    return res.json(produtos);
  });


  
app.put('/produtos/:id', async(req, res) => {
  
  const id = req.params.id;
  const text = req.body.text;
  const isDone = req.body.isDone;
    
  const produto = await Produto.findOneAndUpdate({ _id: id},{text, isDone}, {new: true}); // returns Query; new : true retorna o novo objeto
    
  return res.json(produto);
});


app.delete('/produtos/:id', async(req, res) => {

  const id = req.params.id;
    
  const produto = await Produto.findOneAndDelete({ _id: id}); 
    
  return res.json(produto);
});



mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
