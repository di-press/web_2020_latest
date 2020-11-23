<template>
  <v-main>
    <highlights />
    <products tipo="Destaques"></products>
    <products tipo="Promoções"></products>
    <products tipo="Categorias"></products>
  </v-main>
</template>

<script>
import highlights from "./highlights.vue";
import products from "./ProductsShow.vue";

export default {
  components: { products, highlights },
  data() {
    return {};
  },
};
</script>
