<template>
  <div class="product-gallery">
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
    <div class="image" :style="mainImage"></div>
    <!-- É tipo esse debaixo, só que não to achando o path pra imagem no seu código..-->
    <!--<v-img contain :src="path_pra_imagem"></v-img>-->
  </div>
</template>

<script>
export default {
  props: ["images"],
  data: () => {
    return { activeImg: 0 };
  },
  computed: {
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
    width: 60vw;
    height: 60vh;
    @include bg-image;
  }
}
</style>