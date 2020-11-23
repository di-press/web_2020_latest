<template>
  <v-app>
    <v-card outlined>
      <v-card-title>Produtos</v-card-title>
      <v-row v-for="product in products" :key="product.name">
        <HorizontalProduct :product="product" :btnAction="remove" />
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
import HorizontalProduct from "../cards/HorizontalProduct";

export default {
  components: {
    HorizontalProduct,
  },
  methods: {
    removeFromCart() {},
  },
  data: function () {
    return {
      products: [
        {
          name: "Moletom",
          quantity: 1,
          price: 120.9,
          //image: require('../../assets/moletom.png'),
        },
        {
          name: "Agenda 2021",
          quantity: 1,
          price: 79.6,
          //image: require('../../assets/moletom.png'),
        },
      ],
    };
  },
};
</script>