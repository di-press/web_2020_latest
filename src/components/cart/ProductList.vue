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
      await axios.put(`http://localhost:3000/api/carrinho/${product._id}`, { ref: product.ref, quantity: product.quantity });
    },
    async incrementProduct(product) {
      product.quantity += 1;
      console.log(product);
      await axios.put(`http://localhost:3000/api/carrinho/${product._id}`, { ref: product.ref, quantity: product.quantity });
    }
  }
};
</script>