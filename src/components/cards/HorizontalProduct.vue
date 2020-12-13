<template>
  <v-card class="mx-auto my-1" v-if="product.quantity > 0">
    <div class="d-flex">
      <div>
        <v-img
          :src="product.image_url"
          width="150px"
          height="150px"
        />
      </div>

      <div class="d-flex flex-column justify-center">
        <v-card-title class="pt-0">
          {{ product.name }}
        </v-card-title>
        <v-card-subtitle>
          R${{ product.price }} | Qtd. {{ product.quantity }}</v-card-subtitle
        >

        <v-btn color="primary" class="ml-4 my-1" outlined small @click="$emit('decrement')">
          <v-icon small left>mdi-minus-circle</v-icon>
          Diminuir quantidade
        </v-btn>
        <v-btn color="primary" class="ml-4 my-1" outlined small @click="$emit('increment')">
          <v-icon small left>mdi-plus-circle</v-icon>
          Aumentar quantidade
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object,
    updateCart: Function,
    btnAction: String,
    i: Number,
  },
  emits: ['increment', 'decrement']
};
</script>