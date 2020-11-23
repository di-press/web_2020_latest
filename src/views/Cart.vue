<template>
  <v-app>
    <span class="title">
      <h2>carrinho</h2>
    </span>
    <v-cointainer>
      <v-row>
        <v-col sm="8" md="5" offset-md="2" lg="4" offset-lg="3">
          <ProductList />
        </v-col>

        <v-col sm="4" md="3">
          <CheckoutBox />
        </v-col>
      </v-row>
    </v-cointainer>
  </v-app>
</template>

<script>
import ProductList from "../components/cart/ProductList.vue";
import CheckoutBox from "../components/cart/CheckoutBox.vue";

export default {
  components: {
    ProductList,
    CheckoutBox,
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  padding: 0;
}
</style>