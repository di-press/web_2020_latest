<template>
  <v-card outlined min-width="90%" class="mx-auto mb-5 pa-4">
    <div class="d-flex">
      <div>
        <v-img
          :src="require('../../assets/moletom.png')"
          width="120px"
          height="120px"
        />
      </div>

      <div class="d-flex flex-column justify-center">
        <v-card-title class="pt-0">
          {{ product.name }}
        </v-card-title>
        <v-card-subtitle>
          ${{ product.price }} | Qtd. {{ product.quantity }}</v-card-subtitle
        >

        <v-btn color="secondary" class="ml-4" outline small>
          <v-icon small left>fa-minus</v-icon>
          Remover produto
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
};
</script>