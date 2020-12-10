<template>
  <v-main>
    <highlights />
    <products tipo="NOVIDADES" :produtos="novidades"></products>
    <products tipo="PROMOÇÕES" :produtos="promocoes"></products>
    <products tipo="EXCLUSIVOS" :produtos="exclusivos"></products>
  </v-main>
</template>

<script>
import axios from 'axios';
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
  created() {
    this.initialize();
  },
  methods: {
    async initialize() {
      this.novidades = await this.findNovidades();
      this.promocoes = await this.findPromocoes();
      this.exclusivos = await this.findExclusivos();
    },

    async findNovidades() {
      //método get: pega todos os produtos com a categoria Novidades do Mongo(3 produtos):
      const response = await axios.get("http://localhost:3000/api/produtos/findNovidades");

      return response.data;
    },
    
    async findPromocoes() {
      //método get: pega todos os produtos do Mongo:
      const response = await axios.get("http://localhost:3000/api/produtos/findPromocoes");

      return response.data;
    },

    async findExclusivos() {
      //método get: pega todos os produtos do Mongo:
      const response = await axios.get("http://localhost:3000/api/produtos/findExclusivos");

      return response.data;
    },
  }
};
</script>
