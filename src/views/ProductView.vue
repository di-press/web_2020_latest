<template>
  <v-app>
    <div class="home">
      <h1>{{ product.name }}</h1>
      <Product :images="product.images" />

      <!--<v-radio-group v-model="row" class="ml-2" row v-bind:style="styles">
        <v-radio label="P" value="P"></v-radio>
        <v-radio label="M" value="M"></v-radio>
        <v-radio label="G" value="G"></v-radio>
        <v-radio label="GG" value="GG"></v-radio>
      </v-radio-group>
      -->

      <v-container class="px-0" fluid>
        <v-row dense>
          <v-col cols="12">
            <v-card class="mx-auto">
              <v-card-text>
                <p class="display-1 text--primary align-center">
                  Preço: R$ {{ computePrice }}
                </p>
                <br/>
                <v-tabs>
                  <v-tab v-bind:style="styles" class="black--text font-weight-bold">Descrição</v-tab>
                  <v-tab-item>
                    <!-- Deixei as informações visuais hardcoded por motivos de: não achei >
                    <p>Os moletons são de ótima qualidade. Possuem capuz e bolsos. Este produto é apenas para compras em atacado.</p> -->
                    <p class="font-weight-bold" v-bind:style="styles">{{ product.description }}</p>
                  </v-tab-item>
                </v-tabs>
                <br/>
                <v-tabs>
                  <br/>
                  <v-tab v-bind:style="styles" class="black--text font-weight-bold">Informações visuais:</v-tab>
                  <v-tab-item>
                  <!-- Deixei as informações visuais hardcoded por motivos de: pressa-->
                  <p class="font-weight-bold" v-bind:style="styles">{{ product.visualDescription }}</p>
                  </v-tab-item>
                </v-tabs>
                <v-card-title color="black" class="black--text font-weight-bold" v-bind:style="styles"> Tamanhos </v-card-title>
                <v-radio-group v-model="row" class="ml-2 black--text font-weight-bold" row v-bind:style="styles">
                  <v-radio class="vueradio" label="P" value="P"></v-radio>
                  <v-radio class="vueradio" label="M" value="M"></v-radio>
                  <v-radio class="vueradio" label="G" value="G"></v-radio>
                  <v-radio class="vueradio" label="GG" value="GG"></v-radio>
                </v-radio-group>
                <v-card-title  color="black" class="black--text font-weight-bold" v-bind:style="styles">
                  Quantidade 
                </v-card-title>
                <v-text-field
                  v-model="product.quantity"
                  type="number"
                  outlined
                  style="width: 100px"
                  :value="1"
                  min="1"
                  dense
                  v-bind:style="styles"
                ></v-text-field>
                <!-- BOTAO ADICIONAR CARRINHO -->
                <div class="center">
                  <v-btn
                    href="/carrinho"
                    color="primary"
                    class="mu-2 mb-8 black--text"
                    large
                  >
                    <v-icon>mdi-cart</v-icon> Adicionar o Carrinho
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>      

      <!-- Produtos relacionados -->
      <p class="text-center" v-bind:style="styles">Produtos Relacionados</p>
      <v-divider></v-divider>
      <div class="row text-center">
        <div class="col-md-4 text-center" v-bind:style="styles">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2">
              <v-img
                class="white--text align-end"
                height="100%"
                :src="require('../assets/moletom.png')"
              >
              </v-img>
              <v-card-title color="black" v-bind:style="styles"> Moletom Canguru </v-card-title>
              <div class="text-center">
                <v-btn href="/produto" class="ma-2 black--text" color="primary"> Ver </v-btn>
              </div>
            </v-card>
          </v-hover>
        </div>

        <div class="col-md-4 text-center" v-bind:style="styles">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2">
              <v-img
                class="white--text align-end"
                height="100%"
                :src="require('../assets/moletom.png')"
              >
              </v-img>
              <v-card-title color="black" v-bind:style="styles"> Moletom Canguru </v-card-title>
              <div class="text-center">
                <v-btn href="/produto" class="ma-2 black--text" color="primary"> Ver </v-btn>
              </div>
            </v-card>
          </v-hover>
        </div>

        <div class="col-md-4 text-center" v-bind:style="styles">
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card :elevation="hover ? 16 : 2">
              <v-img
                class="white--text align-end"
                height="100%"
                :src="require('../assets/moletom.png')"
              >
              </v-img>
              <v-card-title color="black" v-bind:style="styles"> Moletom Canguru </v-card-title>
              <div class="text-center">
                <v-btn href="/produto" class="ma-2 black--text" color="primary"> Ver </v-btn>
              </div>
            </v-card>
          </v-hover>
        </div>
      </div>
    </div>
    <br/>
  </v-app>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "Home",
  data: () => {
    return {
      storeFont: 1.4,
      reveal: false,
      styles: {
        fontSize: '1.4em'
      },
      numericFontSize: 1.4,
      product: {
        images: ["moletom.png", "moletom2.png"],
        name: "Moletom Canguru",
        description:
          "Os moletons são de ótima qualidade. Possuem capuz e bolsos. Este produto é apenas para compras em atacado.",
        visualDescription:
          "#PraCegoVer: Foto de um moletom laranja, com capuz e bolso frontal. Possui estampa frontal com a mensagem \"Sua arte, seu curso, suas cores, beuni\".",
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
  computed: {
    computePrice() {
      return (this.product.quantity * this.product.price).toFixed(2) + '';
    }
  },
  methods: {
    aumentarFonte() {
      this.numericFontSize += 0.1
      if (this.numericFontSize >= 1.8) {
        this.numericFontSize = 1.8;
      }
      this.styles.fontSize = this.numericFontSize + 'em';
    },
    diminuirFonte() {
      this.numericFontSize -= 0.1
      if (this.numericFontSize <= 1.0) {
        this.numericFontSize = 1.0;
      }
      this.styles.fontSize = this.numericFontSize + 'em';
    }
  },
  watch: {
    '$store.state.fontSize': function() {
      console.log(this.$store.state.fontSize)
      if (this.$store.state.fontSize > this.storeFont) {
        this.aumentarFonte()
      }
      else { 
        this.diminuirFonte()
      }

      this.storeFont = this.$store.state.fontSize;
    },
  }
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

.center {
  display: flex;
  justify-content: center;
}

.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}

.vueradio label {
  font-size: 1.0em;
}

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  padding-right: 20px;
}

</style>
