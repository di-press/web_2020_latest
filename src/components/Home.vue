<template>
  <v-main>
    <highlights />
    <products tipo="DESTAQUES">teste</products>
    <products tipo="PROMOÇÕES"></products>
    <products tipo="CATEGORIAS"></products>
  </v-main>
</template>

<script>
//import Header from "./Header.vue";
import highlights from "./highlights.vue";
import products from "./ProductsShow.vue";

export default {
  components: { products, highlights },
  data() {
    return {};
  },
};
</script>
