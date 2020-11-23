<template>
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
</template>

<script>
import FiltroCheckbox from "./FiltroCheckbox";
import FiltroSlider from "./FiltroSlider";

export default {
  name: "FiltroDeProdutos",
  components: {
    FiltroCheckbox,
    FiltroSlider,
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
</style>
