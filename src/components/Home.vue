<template>
  <v-main>
    <highlights />
    <products tipo="NOVIDADES" :produtos="novidades"></products>
    <products tipo="PROMOÇÕES" :produtos="promocoes"></products>
    <products tipo="EXCLUSIVOS" :produtos="exclusivos"></products>
  </v-main>
</template>

<script>
import highlights from "./highlights.vue";
import products from "./ProductsShow.vue";

export default {
  components: { products, highlights },
  data() {
    return {
      novidades: [],
      promocoes: [],
      exclusivos: []
    };
  },
  methods: {},
  watch: {
    '$store.state.novidades': function() {
        this.novidades = this.$store.state.novidades;
     },
     '$store.state.promocoes': function() {
        this.promocoes = this.$store.state.promocoes;
     },
     '$store.state.exclusivos': function() {
        this.exclusivos = this.$store.state.exclusivos;
     },
  }

};
</script>
