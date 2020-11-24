<template>
  <div class="d-flex">
    <div class="filtro-lateral">
      <v-card class="filtro" max-width="300" ref="vuecard">
        <v-row>
          <FiltroCheckbox
            tipo="Categorias"
            :opcoes="opcoes.categorias"
            @change="(novoValor) => (filtros.categoriasSelecionadas = novoValor)"
          />
        </v-row>
        <v-row>
          <FiltroCheckbox
            tipo="Cores"
            :opcoes="opcoes.cor"
            @change="(novoValor) => (filtros.coresSelecionadas = novoValor)"
          />
        </v-row>
        <v-row>
          <FiltroSlider
            tipo="Preço"
            :opcoes="opcoes.precos"
            @change="(novoValor) => (filtros.faixaDePreco = novoValor)"
          />
        </v-row>
        <v-row>
          <FiltroSlider
            tipo="Tamanho"
            :opcoes="opcoes.tamanhos"
            @change="(novoValor) => (filtros.tamanhoEscolhido = novoValor)"
          />
        </v-row>
        <!-- Teste: verificar que os filtros desejados foram realmente selecionados -->
        <div>
          Filtros escolhidos:
          {{ filtros }}
        </div>
      </v-card>
    </div>
    <div class="produtos">
      <v-container class="grey lighten-5 evelation-2">
        <!--<v-row align="center">
          <v-btn color="orange darken-3" @click="aumentarFontes"> {{aumentar}} </v-btn>
          <v-btn color="orange darken-3" @click="diminuirFontes"> {{diminuir}} </v-btn>
        </v-row>-->
        <v-row no-gutters>
          <template v-for="(detalhesDoProduto, indice) in produtos">
            <v-col :key="indice">
              <Thumbnail
                :nome="detalhesDoProduto.nome"
                :preco="detalhesDoProduto.preco"
                :imagem="detalhesDoProduto.imagem"
                :link="detalhesDoProduto.link"
              />
            </v-col>
          </template>
        </v-row>
      </v-container>
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
  methods: {
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
      // filtros armazena todos os filtros selecionados nos componentes filhos
      filtros: {
        categoriasSelecionadas: [],
        coresSelecionadas: [],
        faixaDePreco: null,
        tamanhoEscolhido: null,
      },
      /*
      opções armazena as opções a serem passadas para os componentes filhos
      utilizarem para renderizar opções de seleção
      */
      opcoes: {
        categorias: [
          { nome: "Moletons", selecionado: false },
          { nome: "Camisetas", selecionado: false },
          { nome: "Canecas", selecionado: false },
          { nome: "Acessórios", selecionado: false },
        ],
        cor: [
          { nome: "Laranja", selecionado: false },
          { nome: "Azul", selecionado: false },
          { nome: "Amarelo", selecionado: false },
        ],
        precos: ["Até R$50.0", "Até R$100.0", "Até R$200.0", "Até R$500.0"],
        tamanhos: ["Pequeno", "Médio", "Grande", "Extra Grande"],
      },
      // end filtro
      aumentar: "+A",
      diminuir: "-A",
      produtos: [
        {
          nome: "Moletom com bordado personalizável",
          preco: 25,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2019/10/miniatura-atletica-SAMBA-FRENTE-AM-min.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 180,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/mockup-moletom-atleticacaaso2020-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 95,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-31-at-14.24.28-Jo%C3%A3o-D.jpeg",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 18,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/04/oculos.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 110,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/mockup-meia-atleticacaaso2020.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 30,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/03/miniatura-sacim-KIT.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 45,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 180,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Moletom com bordado personalizável",
          preco: 20,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/miniatura-moletom-sacim-PB-frente.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.filtro {
  flex: 1;
  font-family: "Open Sans";
  margin: 2%;
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
  /*grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));*/
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