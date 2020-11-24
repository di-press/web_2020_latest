<template>
  <div class="product-gallery">
    <!-- Divisão para mostrar uma galeria de imagens disponíveis do produto para o usuário -->
    <div class="gallery">
      <div
        class="gallery-item-wrapper"
        v-for="(item, index) in images"
        :key="'img' + index"
        @click="activeImg = index"
      >
        <div
          class="gallery-item"
          :style="{
            'background-image': 'url(' + require('../assets/' + item) + ')',
          }"
        ></div>
      </div>
    </div>
    <!--<div class="image" :style="mainImage"></div>-->
    <v-card>
      <v-img
        :src="imageUrl"
        contain
        max-width="500"
        alt="../assets/logo.png"
      ></v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["images"],
  data: () => {
    return { activeImg: 0 };
  },
  methods: {},
  computed: {
    // Função utilizada para computar dinamicamente o caminho para a imagem
    imageUrl() {
       var imagem = require.context("../assets/", false, /\.png$/);
       return imagem("./" + this.images[this.activeImg]);
    },
    mainImage() {
      return {
        "background-image":
          "url(" + require("../assets/" + this.images[this.activeImg]) + ")",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin bg-image() {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.product-gallery {
  display: flex;
  width: 100%;

  .gallery {
    width: 20vw;
    height: 60vh;
    padding: 0 16px 100px;

    .gallery-item-wrapper {
      border: 1px solid black;
      height: calc(10vh - 16px);
      margin-top: 16px;

      .gallery-item {
        width: 100%;
        height: 100%;
        cursor: pointer;
        @include bg-image;
      }
    }
  }

  .image {
    border: 1px solid black;
    margin-top: 16px;
    width: 80vw;
    height: 60vh;
    border-bottom-left-radius: 100px;
    @include bg-image;
  }
}
</style>