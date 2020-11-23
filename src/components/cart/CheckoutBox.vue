<template>
  <v-app>
    <div class="cart_wrapper">
      <v-card outlined>
        <v-card-title>Resumo do pedido</v-card-title>

        <v-card-text>
          <p>Total:</p>
          <v-btn
            href="/finalizar"
            color="primary"
            class="mx-auto large black--text"
          >
            Finalizar
          </v-btn>
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "Cart",
  data: function () {
    return {
      products: [
        {
          name: "moletom",
          quantity: 1,
          price: 120.9,
        },
      ],
    };
  },
  computed: {
    total_price() {
      return this.products.reduce((sum, product) => {
        return sum + product.quantity * product.price;
      }, 0);
    },
    total_products() {
      return this.products.reduce((sum, product) => {
        return sum + product.quantity;
      }, 0);
    },
    methods: {
      goToCheckout() {},
    },
  },
};
</script>

<style scoped>
</style>