 <template>
  <div>
    <v-row no-gutters>
      <v-col :cols="12">
        <v-card-text class="" tile outlined>
          <v-card-title class="subheading">{{ tipo }}</v-card-title>
          <v-divider></v-divider>
          <div class="row">
            <v-spacer></v-spacer>
            <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img
                    class="white--text align-end"
                    contain
                    :src="require('../assets/moletom.png')"
                  >
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div v-bind:style="styles">Moletom Canguru</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn v-bind:style="styles" href="/produto" class="ma-2" outlined>
                      Comprar
                    </v-btn>
                    <!-- <v-btn href="/" class="ma-2" outlined>
                      <v-icon size="24px">mdi-heart</v-icon>
                    </v-btn> -->
                  </div>
                </v-card>
              </v-hover>
            </div>
            <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img
                    class="white--text align-end"
                    contain
                    :src="require('../assets/moletom.png')"
                  >
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div v-bind:style="styles">Moletom Canguru</div>
                  </v-card-text>

                  <div class="text-center">
                    <!-- <v-btn href="/produto" align="center" outlined> -->
                    <v-btn v-bind:style="styles" href="/produto" class="ma-2" outlined>
                      Comprar
                    </v-btn>
                    <!-- <v-btn href="/" class="ma-2" outlined>
                      <v-icon size="24px">mdi-heart</v-icon>
                    </v-btn> -->
                  </div>
                </v-card>
              </v-hover>
            </div>
            <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
              <v-hover v-slot:default="{ hover }" open-delay="200">
                <v-card :elevation="hover ? 16 : 2">
                  <v-img
                    class="white--text align-end"
                    contain
                    :src="require('../assets/moletom.png')"
                  >
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div v-bind:style="styles">Moletom Canguru</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/produto" class="ma-2" v-bind:style="styles" outlined>
                      Comprar
                    </v-btn>
                    <!-- <v-btn href="/" class="ma-2" outlined>
                      <v-icon size="24px">mdi-heart</v-icon>
                    </v-btn> -->
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
  props: ["tipo"],
  data() {
    return {
      storeFont: 1.4,
      styles: {
        fontSize: '1.0em'
      },
      numericFontSize: 1.0,
    };
  },
  methods: {
    aumentarFonte() {
      //this.styles.fontFamily = "Arial";
      this.numericFontSize += 0.1
      if (this.numericFontSize >= 1.4) {
        this.numericFontSize = 1.4;
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