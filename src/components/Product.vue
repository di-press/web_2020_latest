<template>
  <div class="product-gallery">
    <v-card class="mx-auto">
      <v-img
        :src="images"
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
  data() {
    return {};
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