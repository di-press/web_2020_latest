<template>
  <div class="thumbnail" v-bind:style="titleStyles">
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <a v-bind:href="link">
        <v-img contain :src="imagem"></v-img>

        <v-card-title color="black" class="titulo">{{ nome }}</v-card-title>
      </a>

      <v-card-text>
        <div class="secao-preco" v-bind:style="detailsStyles">R$ {{ preco }}</div>
        <a v-bind:href="link">
          <v-btn v-bind:styles="detailsStyles" depressed color="orange"> Mais Informações </v-btn>
        </a>
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
      detailsStyles: {
        fontSize: '1.5em'
      },
      detailsFontSize: 1.5,
      titleStyles: {
        fontSize: '1.2em'
      },
      titleFontSize: 1.0,
    };
  },
  methods: {
    aumentarFonte() {
      //this.styles.fontFamily = "Arial";
      this.detailsFontSize += 0.1
      this.titleFontSize += 0.1
      
      if (this.titleFontSize >= 1.8) {
        this.titleFontSize = 1.8;
      }

      if (this.detailsFontSize >= 2.0) {
        this.detailsFontSize = 2.0;
      }

      this.detailsStyles.fontSize = this.detailsFontSize + 'em';
      this.titleStyles.fontSize = this.titleFontSize + 'em';
    },
    diminuirFonte() {
      //this.styles.fontFamily = "Verdana";
      this.detailsFontSize -= 0.1
      this.titleFontSize -= 0.1
      
      if (this.titleFontSize <= 0.9) {
        this.titleFontSize = 0.9;
      }

      this.titleStyles.fontSize = this.titleFontSize + 'em';
    }
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
  font-size: 1.5em;
  padding-bottom: 8%;
}
</style>