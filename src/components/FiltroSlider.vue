<template>
  <div class="cursor-deslizante" v-bind:style="styles">
    <v-row align="center">
      <v-btn color="orange darken-3" @click="aumentarFonte"> {{aumentar}} </v-btn>
      <v-btn color="orange darken-3" @click="diminuirFonte"> {{diminuir}} </v-btn>
    </v-row>
    <div class="tipo">
      <label>
        <strong>{{ tipo }}</strong>
      </label>
    </div>
    <!-- 
      Definimos um cursor com valores fornecidos pelo props opcoes.
      O número de opções determina o tamanho do intervalo: 0 é o valor
      mínimo para a indexação das opções e opcoes.length() - 1 é o
      maior valor permitido. Quando houver mudança no cursor, emitimos
      um sinal contendo o novo valor escolhido.
    -->
    <div class="cursor">
      <v-slider
        v-model="valorNoIntervalo"
        class = "large-slider vueslider"
        v-bind:style="styles"
        color="orange darken-3"
        track-color="grey"
        min="0"
        :max="fimDoIntervalo"
        step="1"
        ticks
      ></v-slider>
    </div>
    <div class="valor-escolhido">{{ opcoes[valorNoIntervalo] }}</div>
    <v-divider class="mx-4"></v-divider>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: ["tipo", "opcoes"],
  data() {
    return {
      valorNoIntervalo: 1,
      styles: {
        //fontFamily: 'Time New Roman',
        //fontSize: '1.25 em',
        fontSize: '1.0em'
      },
      numericFontSize: 1.0,
      opcoesFiltradas: null,
      aumentar: "+A",
      diminuir: "-A",
    };
  },
  mounted() {
    // Inicializa o cursor com a primeira opção disponível
    this.valorNoIntervalo = 0;
  },
  // Quando houver mudanças no cursor, reagimos ao evento e emitimos um sinal contendo a opção selecionada
  watch: {
    'valorNoIntervalo': function(novoValor) {
      this.valorNoIntervalo = novoValor;
      let valorEscolhido = this.opcoes[this.valorNoIntervalo];
      this.$emit("change", valorEscolhido);
    }
  },
  methods: {
    aumentarFonte() {
      //this.styles.fontFamily = "Arial";
      this.numericFontSize += 0.1
      if (this.numericFontSize >= 1.5) {
        this.numericFontSize = 1.5;
      }
      this.styles.fontSize = this.numericFontSize + 'em';
    },
    diminuirFonte() {
      //this.styles.fontFamily = "Verdana";
      this.numericFontSize -= 0.1
      if (this.numericFontSize <= 0.8) {
        this.numericFontSize = 0.8;
      }
      this.styles.fontSize = this.numericFontSize + 'em';
    }
  },
  computed: {
    /* 
    Retorna o maior valor permitido para o cursor de acordo
    com o número de opções fornecidas. Indexação começa em zero
    */
    fimDoIntervalo() {
      return this.opcoes.length - 1;
    },
  },
};
</script>

<style scoped>
.cursor-deslizante {
  padding: 10%;
  margin-right: 1%;
}

.tipo {
  margin-top: 10%;
  margin-bottom: 20%;
}

.vueslider /deep/ label {
  font-size: 1.0em;
}

.cursor {
  width: 200px;
}

.tipo {
  margin-bottom: 5%;
}

.valor-escolhido {
  margin: 7%;
}

.large-slider .v-slider {
  width: 10000px;
}
</style>
