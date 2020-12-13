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
import axios from "axios";

import ProductList from "../components/cart/ProductList.vue";
import CheckoutBox from "../components/cart/CheckoutBox.vue";

export default {
  components: {
    ProductList,
    CheckoutBox,
  },
  data: function () {
    return {
      products: [],
    };
  },
  computed: {
    // Função para calcular preço total da compra
    totalPrice() {
      return this.products.reduce((sum, product) => {
        return sum + product.quantity * product.price;
      }, 0);
    },
    // Função para calcular quantidade total de produtos no carrinho
    totalProducts() {
      return this.products.reduce((sum, product) => {
        return sum + product.quantity;
      }, 0);
    },
  },
  // Importa dados da requisição para o front
  async beforeCreate() {
    this.products = await getItens();
  }
};

// Função que faz busca de itens que estão no carrinho
// Depois pega informações extras de cada produto cadastrado
// no banco de dados de estoque da loja.
async function getItens() {
  const response = await axios.get("http://localhost:3000/api/carrinho");

  const products = response.data;

  for (let product of products) { 
    const tmp = await axios.get(`http://localhost:3000/api/produtos/${ product.ref }`);
    console.log(tmp.data);
    product.name = tmp.data.name;
    product.price = tmp.data.preco_produto;
    product.image_url = tmp.data.foto;
  }
  
  return products;
}
</script>

<style scoped>
.title {
  text-align: center;
  padding: 0;
}
</style>