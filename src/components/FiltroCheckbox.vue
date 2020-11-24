<template>
  <div class="checkbox" v-bind:style="styles">
    <!--<v-row align="center">
      <v-btn color="orange darken-3" @click="aumentarFonte"> {{aumentar}} </v-btn>
      <v-btn color="orange darken-3" @click="diminuirFonte"> {{diminuir}} </v-btn>
    </v-row>-->
    <div class="tipo">
      <label>
        <strong>{{ tipo }}</strong>
      </label>
    </div>
    <!-- Lista dinâmica de checkboxes de acordo com o número de opções recebidas -->
    <div v-for="(opcao, indice) in opcoes" :key="indice">
      <v-checkbox
        v-model="opcao.selecionado"
        v-bind:style="styles"
        :label="opcao.nome"
        color="orange darken-3"
        @change="atualizarOpcoes"
        class="ma-0 pa-0 vuecheckbox"
      >
      </v-checkbox>
    </div>
    <v-divider class="mx-4"></v-divider>
  </div>
</template> 

<script>
export default {
  name: "Checkbox",
  props: ["tipo", "opcoes"],
  data() {
    return {
      storeFont: 1.4,
      styles: {
        fontSize: '1.0em'
      },
      numericFontSize: 1.0,
      opcoesFiltradas: null,
      aumentar: "+A",
      diminuir: "-A",
    };
  },
  methods: {
    // Quando houver mudanças em algum checkbox, emitimos um sinal contendo as opções selecionadas
    atualizarOpcoes() {
      this.opcoesSelecionadas();
    },
    opcoesSelecionadas() {
      let filtradas = this.opcoes
        .filter((opcao) => opcao.selecionado)
        .map((nome) => nome.nome);
      this.$emit("change", filtradas);
    },
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

<style scoped>
.tipo {
  margin-top: 10%;
  margin-bottom: 20%;
}

.checkbox {
  padding: 10%;
  margin-right: 40%;
}

.vuecheckbox /deep/ label {
  font-size: 1.0em;
}

.v-checkbox label { color: red }

.descricao {
  padding-left: 10%;
}
</style>
