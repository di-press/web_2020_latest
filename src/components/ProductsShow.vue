 <template>
  <div>
    <v-row no-gutters>
      <v-col :cols="12">
        <v-card-text class="" tile outlined>
          <v-card-title v-bind:style="styles" class="subheading font-weight-bold">{{ tipo }}</v-card-title>
          <v-divider></v-divider>
          <div class="row">
            <v-spacer></v-spacer>
            <div class ="col-12 col-md-3" v-for="(detalhesDoProduto, indice) in produtos" :key="indice">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img
                    class="white--text align-end"
                    contain
                    :src="detalhesDoProduto.foto"
                  >
                  </v-img>

                  <v-card-text class="text--primary text-center font-weight-bold">
                    <div v-bind:style="styles"> {{ detalhesDoProduto.name }} </div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn @click="atualizarProduto(indice)" class="ma-2 black--text" color="primary">
                      Comprar
                    </v-btn>
                  </div>
                </v-card>
              </v-hover>
            </div>
            <v-spacer></v-spacer>
          </div>
        </v-card-text>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["tipo", "produtos"],
  data() {
    return {
      storeFont: 1.4,
      styles: {
        fontSize: '1.4em'
      },
      numericFontSize: 1.4,
    };
  },
  methods: {
    atualizarProduto(indice) {
      //console.info("ATUALIZAR PRODUTO " + this.$props.produtos[indice].name);
      this.$store.dispatch('updateProduct', this.$props.produtos[indice]);
      this.$router.push("/produto");
      // Após ir para a próxima página, retrocedemos a nova página para o topo
      document.body.scrollTop = 0; //  Para o navegador Safari
      document.documentElement.scrollTop = 0; // Para o navegador Chrome, Firefox, IE e Opera
    },
    aumentarFonte() {
      //this.styles.fontFamily = "Arial";
      this.numericFontSize += 0.1
      if (this.numericFontSize >= 1.8) {
        this.numericFontSize = 1.8;
      }
      this.styles.fontSize = this.numericFontSize + 'em';
    },
    diminuirFonte() {
      //this.styles.fontFamily = "Verdana";
      this.numericFontSize -= 0.1
      if (this.numericFontSize <= 1.0) {
        this.numericFontSize = 1.0;
      }
      this.styles.fontSize = this.numericFontSize + 'em';
    }
  },
  watch: {
    '$store.state.fontSize': function() {
      //console.log(this.$store.state.fontSize)
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