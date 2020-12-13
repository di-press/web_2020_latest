<template>
  <v-app>
    <v-card outlined>
      <v-card-title>Produtos</v-card-title>
      <v-row v-for="product in products" :key="product.name">
        <HorizontalProduct :product="product" @increment="incrementProduct(product)" @decrement="decrementProduct(product)" />
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
import axios from "axios";

import HorizontalProduct from "../cards/HorizontalProduct";

export default {
  components: {
    HorizontalProduct,
  },
  props: ['products'],
  methods: {
    async decrementProduct(product) {
      product.quantity -= 1;

      const response = await axios.get(`http://localhost:3000/api/produtos/${product.ref}`);
      const tmp = response.data;

      tmp.unidades_estoque += 1;
      
      let user = JSON.parse(localStorage.getItem('user'));

      await axios.put(`http://localhost:3000/api/produtos/${product.ref}`, { 
        name: tmp.name, 
        id_produto: tmp.id_produto, 
        preco_produto: tmp.preco_produto, 
        unidades_estoque: tmp.unidades_estoque, 
        unidades_vendidas: tmp.unidades_vendidas, 
        cor: tmp.cor, 
        tam_produto: tmp.tam_produto, 
        categoria_produto: tmp.categoria_produto, 
        foto: tmp.foto, 
        descricao_produto: tmp.descricao_produto, 
        descricao_foto: tmp.descricao_foto
      }, { headers: {
          'x-access-token': `${user.token}` 
        } });
      
      if (product.quantity === 0)
        await axios.delete(`http://localhost:3000/api/carrinho/${product._id}`);
      else
        await axios.put(`http://localhost:3000/api/carrinho/${product._id}`, { ref: product.ref, quantity: product.quantity });
    
    },
    async incrementProduct(product) {
      const response = await axios.get(`http://localhost:3000/api/produtos/${product.ref}`);
      const tmp = response.data;

      let user = JSON.parse(localStorage.getItem('user'));

      if (tmp.unidades_estoque > 0) {
        product.quantity += 1;
        await axios.put(`http://localhost:3000/api/carrinho/${product._id}`, { ref: product.ref, quantity: product.quantity }, {
        headers: {
          'x-access-token': `${user.token}` 
        } });

        tmp.unidades_estoque -= 1;

        await axios.put(`http://localhost:3000/api/produtos/${product.ref}`, { 
          name: tmp.name, 
          id_produto: tmp.id_produto, 
          preco_produto: tmp.preco_produto, 
          unidades_estoque: tmp.unidades_estoque, 
          unidades_vendidas: tmp.unidades_vendidas, 
          cor: tmp.cor, 
          tam_produto: tmp.tam_produto, 
          categoria_produto: tmp.categoria_produto, 
          foto: tmp.foto, 
          descricao_produto: tmp.descricao_produto, 
          descricao_foto: tmp.descricao_foto
        });
      } else {
        alert(`Produto ${product.name} fora de estoque`);
      }
    }
  }
};
</script>