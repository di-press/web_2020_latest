<template>
  <v-app>
    <v-card outlined>
      <v-card-title>Produtos</v-card-title>
      <v-row v-for="product in products" :key="product.name">
        <HorizontalProduct :product="product" />
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
  props: ['products']
};
</script>