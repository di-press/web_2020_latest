<template>
  <v-app>
    <div class="cart_wrapper">
      <v-card outlined>
        <v-card-title>Resumo do pedido</v-card-title>

        <v-card-text>
          <p>{{ totalProducts }} produto(s) no carrinho</p>
          <p>Total: R${{ totalPrice }}</p>
          <v-btn
            href="/finalizar"
            color="primary"
            @click="finalizarCompra"
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
import axios from "axios";

export default {
  name: "Cart",
  props: ['totalPrice', 'totalProducts'],
  methods: {
    // Para cada produto no carrinho, é atualizado o campo de unidades_vendidas
    // no banco de dados de estoque
    async finalizarCompra() {
      const response = await axios.get("http://localhost:3000/api/carrinho");
      const products = response.data;

      for (let product of products) { 
        const response = await axios.get(`http://localhost:3000/api/produtos/${product.ref}`);
        const tmp = response.data;

        tmp.unidades_vendidas += product.quantity;

        await axios.put(`http://localhost:3000/api/produtos/${product.ref}`, { 
          name: tmp.name, 
          id_produto: tmp.id_produto, 
          preco_produto: tmp.preco_produto, 
          unidades_estoque: tmp.unidades_estoque, 
          unidades_vendidas: tmp.unidades_vendidas, 
          cor: tmp.cor, 
          tam_produto: tmp.tam_produto, 
          categoria_produto: tmp.categoria_produto, 
          foto: tmp.foto, 
          descricao_produto: tmp.descricao_produto, 
          descricao_foto: tmp.descricao_foto
        });
      }      
      alert(`Compra concluida com sucesso!`);
    }
  }
};
</script>

<style scoped>
</style>