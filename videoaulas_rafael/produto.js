const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const produtoSchema = new Schema({
   
    /*
    name: String,
    id_produto: String,
    preco_produto: Flo,
    unidades_estoque: 0,
    unidades_vendidas: 0,
    lucro: 0,
    cor: "",
    tam_produto: "",
    categoria_produto: "",
    foto: "",
    descricao_produto: "",
    descricao_foto: "",
    */
    
    text: String,
    isDone: Boolean, 
    
  });

const Produto = mongoose.model('Produto', produtoSchema);
module.exports = Produto;
