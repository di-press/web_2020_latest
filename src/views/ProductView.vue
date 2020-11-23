<template>
  <div class="home">
    <h1>{{ product.name }}</h1>
    <Product :images="product.images" />
    <p>{{ product.description }}</p>

    <div class="order">
      <table style="width: 100%">
        <tr>
          <th>QUANTIDADE</th>
          <th>CORES</th>
          <th>TAMANHOS</th>
        </tr>
        <th>
          <div>
            <input
              class="quantity"
              v-model="product.quantity"
              type="number"
              name=""
              min="1"
            />
            <vue-number-input v-model="test0" placeholder="Write" />
          </div>
        </th>
        <th>
          <label for="cores"></label>
          <input
            v-model="product.cores"
            type="radio"
            id="cores"
            name="cores"
            value="amarelo"
          />
          Amarelo<br />
          <input
            v-model="product.cores"
            type="radio"
            id="cores"
            name="cores"
            value="vermelho"
          />
          Vermelho <br />
          <input
            v-model="product.cores"
            type="radio"
            id="cores"
            name="cores"
            value="preto"
          />
          Preto <br /><br />
        </th>
        <th>
          <label for="tamanho"></label>
          <input
            v-model="product.tananho"
            type="radio"
            id="tamanho"
            name="tamanho"
            value="PP"
          />
          PP
          <input
            v-model="product.tananho"
            type="radio"
            id="tamanho"
            name="tamanho"
            value="P"
          />
          P
          <input
            v-model="product.tamanho"
            type="radio"
            id="tamanho"
            name="tamanho"
            value="M"
          />
          M
          <input
            v-model="product.tamanho"
            type="radio"
            id="tamanho"
            name="tamanho"
            value="G"
          />
          G
          <input
            v-model="product.tamanho"
            type="radio"
            id="tamanho"
            name="tamanho"
            value="GG"
          />
          GG
        </th>
      </table>
    </div>
    <p class="price_text">Total:</p>
    <p class="price">R$ {{ product.quantity * product.price }}</p>
    <v-btn href="/carrinho" color="primary" class="mx-auto large black--text"
      >Comprar</v-btn
    >

    <!-- <h2>Sugestões</h2>
    <div class="sugestions">
      <Product :images="product.suggetionsImages"/>        
    </div> -->
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "Home",
  data: () => {
    return {
      product: {
        images: ["moletom.png", "moletom2.png"],
        name: "Moletom Canguru",
        description:
          "Os moletons são feitas em ótima qualidade e esse produto é apenas para compras em atacado",
        price: 110.99,
        quantity: 1,
        cores: null,
        tamanho: null,
      },
    };
  },
  components: {
    Product,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  max-width: 768px;
  overflow: hidden;
  margin: 0 auto;
}

.price {
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;
}

.quantity {
  text-align: center;
  border: 3px solid #c3c3c3;
}

.price_text {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
}

h1 {
  text-align: center;
  padding: 16px;
  margin: 16px 0 0;
  font-family: Galada, arial;
  font-size: 3rem;
}

h2 {
  text-align: center;
  padding: 16px;
  margin: 16px 0 0;
  font-family: Galada, arial;
  font-size: 2rem;
}

p {
  padding: 16px;
  margin: 0;
  font-family: Abel, arial;
  font-size: 1.3rem;
}

.title {
  color: black;
}

.quantity-text {
  display: flex;
}

.order {
  padding: 16px;

  .quantidade {
    border: black;
  }
}
</style>
