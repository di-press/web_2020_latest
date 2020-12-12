<template>  
    <div class="produtos">
      <h1>RESULTADO DA PESQUISA: "{{ this.$store.state.palavraBuscada }}"</h1>            
        <v-row no-gutters>
          <template v-for="(detalhesDoProduto, indice) in resultadoBusca">
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
    </div> 
</template>

<script>
import Thumbnail from "./Thumbnail";
import store from '../store'

export default {
  name: "ListaDeProdutos",
  store,

  components: {    
    Thumbnail,
  },  

  data() {
    return {

      produtos: [
        {
          nome: "Shorts feminino CAASO",
          preco: 70,
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
          nome: "Chapéu CAASO",
          preco: 30,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-31-at-14.24.28-Jo%C3%A3o-D.jpeg",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Óculos de sol amarelo",
          preco: 18,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/04/oculos.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },
        {
          nome: "Meias cano alto bordadas",
          preco: 50,
          imagem:
            "https://www.beuni.com.br/usp/saocarlos/wp-content/uploads/2020/08/mockup-meia-atleticacaaso2020.png",
          link: "https://www.beuni.com.br/usp/saocarlos/",
        },        
      ],
    };
  },
  
  computed: {

      resultadoBusca(){

        // if(this.busca){
        // return this.produtos.filter((produtos)=>{
        //   return this.busca.toLowerCase().split(' ').every(v => produtos.nome.toLowerCase().includes(v))
        // })
        // }else{
        //   return this.produtos;
        // }

        if(this.$store.state.palavraBuscada){
        return this.produtos.filter((produtos)=>{
          return this.$store.state.palavraBuscada.toLowerCase().split(' ').every(v => produtos.nome.toLowerCase().includes(v))
        })
        }else{
          return this.produtos;
        }

      },
    },
 
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