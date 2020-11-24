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

      <v-container
        class="px-0"
        fluid
      >
      <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <p class="display-1 text--primary">
        Preço: R$ {{ product.quantity * product.price }}
      </p>
      <v-tabs>
        <v-tab>Descrição</v-tab>
        <v-tab-item>
           <!-- Deixei as informações visuais hardcoded por motivos de: pressa-->
          <p>Os moletons são de ótima qualidade. Possuem capuz e bolsos. Este produto é apenas para compras em atacado.</p>
          <!-- <p v-bind:style="styles">{{ product.description }}</p> -->
        </v-tab-item>
      </v-tabs>
      <v-tabs>
        <br/>
        <v-tab>Informações visuais do produto:</v-tab>
        <v-tab-item>
          <!-- Deixei as informações visuais hardcoded por motivos de: pressa-->
          <p>Foto de um moletom laranja, com capuz e bolso frontal. Possui estampa frontal com a mensagem "Sua arte, seu curso, suas cores, beuni</p>
        </v-tab-item>
      </v-tabs>
      <p>Tamanho</p>
      <v-radio-group v-model="row" class="ml-2" row v-bind:style="styles">
        <v-radio label="P" value="P"></v-radio>
        <v-radio label="M" value="M"></v-radio>
        <v-radio label="G" value="G"></v-radio>
        <v-radio label="GG" value="GG"></v-radio>
      </v-radio-group>
      <v-card-title 
        color="black"
        class="font-weight-bold"
        v-bind:style="styles">
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
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 50%%;"
        width="80%"
      >
        <v-card-text class="pb-0">
          <p class="display-1 text--primary">
            Origin
          </p>
          <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
        
      </v-container>

     
    

      

      <!-- Produtos relacionados -->
      <p class="text-center">Produtos Relacionados</p>
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
                <v-btn href="/produto" class="ma-2" outlined> Ver </v-btn>
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
                <v-btn href="/produto" class="ma-2" outlined> Ver </v-btn>
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
                <v-btn href="/produto" class="ma-2" outlined> Ver </v-btn>
              </div>
            </v-card>
          </v-hover>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "Home",
  data: () => {
    return {
      storeFont: 1.0,
      reveal: false,
      styles: {
        fontSize: '1.0em'
      },
      numericFontSize: 1.0,
      product: {
        images: ["moletom.png", "moletom2.png"],
        name: "Moletom Canguru",
        description:
          "Os moletons são de ótima qualidade. Possuem capuz e bolsos. Este produto é apenas para compras em atacado.",
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
  methods: {
    aumentarFonte() {
      this.numericFontSize += 0.1
      if (this.numericFontSize >= 1.6) {
        this.numericFontSize = 1.6;
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

.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  padding-right: 20px;
}

</style>
