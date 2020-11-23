<template>
  <div class="cart_wrapper">
    <header>
      <h2>meu carrinho</h2>
    </header>

    <div class="cart_content">
      <table style="width: 100%">
        <tr>
          <th>Produto</th>
          <th>Qtd.</th>
          <th>Entrega</th>
          <th>Preço</th>
        </tr>
        <tr v-for="product in products">
          <th>{{ product.name }}</th>
          <th>
            <div>
              <span>-</span>
              <input v-model="product.quantity" type="number" name="" min="1" />
              <span>+</span>
            </div>
          </th>
          <th>Entrega</th>
          <th>{{ product.quantity * product.price }}</th>
        </tr>
      </table>
    </div>

    <div class="kart_summary">
      <div class="wrapper">
        <h3>Resumo do pedido</h3>

        <div>
          <span>Total</span>
          <span> {{ total_price }} </span>
          <p>em até 12x sem juros</p>
          <p></p>
        </div>
        <a href="/finalizar"><button>Finalizar</button></a>
      </div>
    </div>
  </div>
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
  },
};
</script>

<style scoped>
.kart_summary {
  background-color: #f8f8f8;
}

button {
  background-color: #f96900;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
  display: block;
}
a:link {
  text-decoration: none;
}
</style>