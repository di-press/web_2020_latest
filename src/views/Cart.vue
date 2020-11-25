<template>
  <v-app>
    <span class="title">
      <h2>Carrinho</h2>
    </span>
    <v-cointainer>
      <v-row>
        <v-col sm="8" md="5" offset-md="2" lg="4" offset-lg="3">
          <ProductList :products="products" />
        </v-col>

        <v-col sm="4" md="3">
          <CheckoutBox :totalPrice="totalPrice" :totalProducts="totalProducts" />
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
  data: function () {
    return {
      products: [
        {
          name: "Moletom",
          quantity: 1,
          price: 180,
          //image: require('../../assets/moletom.png'),
        },
        {
          name: "Agenda 2021",
          quantity: 1,
          price: 80,
          //image: require('../../assets/moletom.png'),
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      return this.products.reduce((sum, product) => {
        return sum + product.quantity * product.price;
      }, 0);
    },
    totalProducts() {
      return this.products.reduce((sum, product) => {
        return sum + product.quantity;
      }, 0);
    },
  },  
};
</script>

<style scoped>
.title {
  text-align: center;
  padding: 0;
}
</style>