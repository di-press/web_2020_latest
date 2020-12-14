<template>
  <div class="d-flex">
    <div class="filtro-lateral">
      <v-card class="filtro" max-width="300" ref="vuecard">
        <v-row>
          <FiltroCheckbox
            tipo="Cores"
            :opcoes="opcoes.cor"
            @change="(novoValor) => (filtros.coresSelecionadas = novoValor)"
          />
        </v-row>
        <v-row>
          <FiltroCheckbox
            tipo="Tamanho"
            :opcoes="opcoes.tamanhos"
            @change="(novoValor) => (filtros.tamanhosEscolhidos = novoValor)"
          />
        </v-row>
        <v-row>
          <FiltroSlider
            tipo="Preço"
            :opcoes="opcoes.precos"
            @change="(novoValor) => (filtros.faixaDePreco = novoValor)"
          />
        </v-row>
      </v-card>
    </div>
    <div class="mb-4">
      <div v-if="produtos.length !== 0">
        <v-container class="grey lighten-5 evelation-2">
          <v-row no-gutters>
            <template v-for="(detalhesDoProduto, indice) in produtos">
              <v-col :key="indice">
                <Thumbnail
                  :produto="detalhesDoProduto"
                  class="ml-6 mr-6"
                />
              </v-col>
            </template>
          </v-row>
        </v-container>
      </div>
      <div v-else class="d-flex justify-center">
          <v-alert
          dense
          border="left"
          type="warning"
          class="font-bold-black black--text d-flex justify-centero"
          v-bind:style="styles"
          >
            Produto não encontrado :( 
          </v-alert>  
      </div>
    </div>
  </div>
</template>

<script>
import Thumbnail from "./Thumbnail";
import FiltroCheckbox from "./FiltroCheckbox";
import FiltroSlider from "./FiltroSlider";

export default {
  name: "ListaDeProdutos",
  components: {
    FiltroCheckbox,
    FiltroSlider,
    Thumbnail,
  },
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.produtos = this.$store.state.produtoPesquisado;
    },
    aumentarFonte() {
      this.numericFontSize += 0.1
      if (this.numericFontSize >= 1.6) {
        this.numericFontSize = 1.6;
      }
      this.styles.fontSize = this.numericFontSize + 'em';
    },
    diminuirFonte() {
      this.numericFontSize -= 0.1
      if (this.numericFontSize <= 1.0) {
        this.numericFontSize = 1.0;
      }
      this.styles.fontSize = this.numericFontSize + 'em';
    },
    aumentarFontes() {
      let size = this.$children.length;
      for (var i = 0; i < size; ++i) {
        if (this.$children[i].$options.name == "Thumbnail") {
          this.$children[i].aumentarFonte();
        }
      }
    },
    diminuirFontes() {
      let size = this.$children.length;
      for (var i = 0; i < size; ++i) {
        if (this.$children[i].$options.name == "Thumbnail") {
          this.$children[i].diminuirFonte();
        }
      }
    }
  },
  data() {
    return {
      storeFont: 1.4,
      styles: {
        fontSize: '1.2em'
      },
      numericFontSize: 1.2,
      // filtros armazena todos os filtros selecionados nos componentes filhos
      filtros: {
        coresSelecionadas: [],
        tamanhosEscolhidos: [],
        faixaDePreco: null,
      },
      /*
      opções armazena as opções a serem passadas para os componentes filhos
      utilizarem para renderizar opções de seleção
      */
      opcoes: {
        cor: [
          { nome: "Azul", selecionado: false },
          { nome: "Amarelo", selecionado: false },
          { nome: "Preto", selecionado: false },
        ],
        tamanhos: [
          { nome: "P", selecionado: false },
          { nome: "M", selecionado: false },
          { nome: "G", selecionado: false }, 
          { nome: "GG", selecionado: false },
        ],
        precos: ["Até R$15.0", "Até R$50.0", "Até R$100.0", "Até R$200.0"],
      },
      aumentar: "+A",
      diminuir: "-A",
      produtos: [],
    };
  },
  watch: {
    '$store.state.produtoPesquisado': function() {
      this.produtos = this.$store.state.produtoPesquisado;
    },
    'filtros': {
      handler: function() {
        this.$store.dispatch('registraBusca', this.$store.state.ultimaBusca);
        this.$store.dispatch('filtraPorCor', this.filtros.coresSelecionadas);
        this.$store.dispatch('filtraPorTamanho', this.filtros.tamanhosEscolhidos);
        var precoNumerico = parseFloat(this.filtros.faixaDePreco.substring(6));
        this.$store.dispatch('filtraPorPreco', precoNumerico);
      },
      deep: true
    },
    '$store.state.fontSize': function() {
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
.filtro {
  flex: 1;
  font-family: sans-serif;
  margin: 2%;
}

.filtro-lateral {
  width: 250px;
  margin: 10px;
  margin-top: -5px;
}
p {
  color: rgb(0, 0, 0);
}

a {
  text-decoration: none;
}

#lista-de-produtos {
  font-size: 150%;
  font-family: sans-serif;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: auto auto auto;
  text-align: center;
}

#lista-de-produtos div {
  line-height: 13px;
}

.imagem-produto {
  width: 100%;
  height: 100%;
}

.preco p:nth-child(2) {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
}

.preco {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.preco p:nth-child(2) {
  color: #40d2a3;
  font-weight: 600;
}

.botao {
  background-color: rgb(249, 105, 0);
  opacity: 0.9;
}

.botao:hover {
  opacity: 1;
}
</style>