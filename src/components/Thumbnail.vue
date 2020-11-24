<template>
  <div class="thumbnail" v-bind:style="titleStyles">
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-img contain :src="imagem"></v-img>
      <v-card-title color="black" class="titulo">{{ nome }}</v-card-title>

      <v-card-text>
        <div class="secao-preco" v-bind:style="detailsStyles">R$ {{ preco }}</div>
        <v-btn href="/produto" v-bind:styles="detailsStyles" depressed color="orange"> Mais Informações </v-btn>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Thumbnail",
  props: ["nome", "preco", "imagem", "link"],
  data() {
    return {
      storeFont: 1.4,
      detailsStyles: {
        fontSize: '1.4em'
      },
      detailsFontSize: 1.4,
      titleStyles: {
        fontSize: '1.2em'
      },
      titleFontSize: 1.2,
    };
  },
  methods: {
    aumentarFonte() {
      //this.styles.fontFamily = "Arial";
      this.detailsFontSize += 0.1
      this.titleFontSize += 0.1
      
      if (this.detailsFontSize >= 2.0) {
        this.detailsFontSize = 2.0;
      }

      if (this.titleFontSize >= 2.0) {
        this.titleFontSize = 2.0;
      }

      this.detailsStyles.fontSize = this.detailsFontSize + 'em';
      this.titleStyles.fontSize = this.titleFontSize + 'em';
    },
    diminuirFonte() {
      this.detailsFontSize -= 0.1
      this.titleFontSize -= 0.1
      
      if (this.detailsFontSize <= 1.4) {
        this.detailsFontSize = 1.4;
      }

      if (this.titleFontSize <= 1.2) {
        this.titleFontSize = 1.2;
      }

      this.detailsStyles.fontSize = this.detailsFontSize + 'em';
      this.titleStyles.fontSize = this.titleFontSize + 'em';
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
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.titulo {
  font-size: 1.0em;
  text-decoration: none;
  color: black;
}

.secao-preco {
  padding-bottom: 8%;
  font-size: 1.5em;
}

.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}

</style>