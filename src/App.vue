<template>
  <v-app>
    <!-- Must have the app property -->
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="#f7f7f7">
      <!-- Cabeçalho -->
      <v-toolbar-title style="width: 350px">
        <a href="/">
          <v-img
            href="/"
            class="mr-3"
            src="@/assets/logo.png"
            height="100%"
            width="50%"
          ></v-img>
        </a>
      </v-toolbar-title>

      <v-text-field
        flat
        filled
        background-color="grey lighten-1"
        hide-details
        prepend-inner-icon="mdi-magnify"
        placeholder="Buscar"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
      <!--
      <v-btn color="orange darken-3" @click="aumentarFontes"> +BUTTON TO RULE THEM ALL </v-btn>
      <v-btn color="orange darken-3" @click="diminuirFontes"> -BUTTON TO RULE THEM ALL </v-btn>
      -->
      <v-btn color="primary" class="black--text" @click="aumentarFontes">
        +A
      </v-btn>
      <v-btn color="primary" class="black--text" @click="diminuirFontes">
        -A
      </v-btn>
      <v-btn
        id="btn1"
        v-on="on"
        href="/carrinho"
        class="my-3 black--text"
        color="primary"
        @click="changeButtons"
      >
        <span v-if="$route.name !== 'Usuarios' && $route.name !== 'Estoque'"
          >Carrinho</span
        >
        <span v-if="$route.name === 'Usuarios' || $route.name === 'Estoque'"
          >Usuários
        </span>
        <!-- Tentar deixar dinâmico o número de produtos no ícone do carrinho -->
        <v-badge :content="nitens" :value="nitens" color="#4dd0e1">
          <!--v-badge :content="nitens" :value="nitens" content="numberItensCart()" value="1" color="#4dd0e1"-->
          <v-icon v-if="$route.name !== 'Usuarios' && $route.name !== 'Estoque'"
            >mdi-cart</v-icon
          >
        </v-badge>
      </v-btn>
      <v-btn
        id="btn2"
        href="/registrar"
        class="my-3 black--text"
        color="primary"
        @click="changeButtons"
      >
        <span v-if="$route.name !== 'Usuarios' && $route.name !== 'Estoque'"
          >Registrar</span
        >
        <span v-if="$route.name === 'Usuarios' || $route.name === 'Estoque'"
          >Estoque
        </span>
        <v-icon v-if="$route.name !== 'Usuarios' && $route.name !== 'Estoque'"
          >mdi-account-circle</v-icon
        >
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-bottom-navigation fixed :value="activeBtn" horizontal class="primary" large>
        <a
          v-for="(categoria, index) in categorias"
          :key="index"
          href="/produtos"
          class="v-btn"
          v-bind:style="navigationStyles"
        >
          <span>{{ categoria.title }}</span>
        </a>

        <!--  BOTOÕES DE ACESSIBILIDADE
        <v-row align="center">
          <v-btn color="orange darken-3" @click="aumentarFontes"> +BUTTON TO RULE THEM ALL </v-btn>
          <v-btn color="orange darken-3" @click="diminuirFontes"> -BUTTON TO RULE THEM ALL </v-btn>
        </v-row>

        -->
        <!-- <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">
              <span>Universidades</span>
            </v-btn>
          </template>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item
              v-for="(universidade, index) in universidades"
              :key="index"
              href="/produtos"
            >
              <v-list-item-title>{{ universidade.title }}</v-list-item-title>
            </v-list-item>
          </v-card>
        </v-menu> -->
      </v-bottom-navigation>
    </v-content>

    <v-main>
      <router-view />
    </v-main>
    <!-- Rodapé -->
    <v-footer :padless="true">
      <v-card
        flat
        tile
        width="100%"
        class="white--text text-center"
        color="#233040"
      >
        <!-- Midias sociais  -->
        <v-card-text>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-facebook</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-instagram</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-twitter</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          <br />A BEUNI NÃO É REPRESENTANTE OFICIAL DESTA UNIVERSIDADE.
          <p>BEUNI TECNOLOGIA LTDA CNPJ: 12.345.678/0001-00</p>
          <p>© 2020 BEUNI - Todos os direitos reservados.</p>
        </v-card-text>
        <v-divider></v-divider>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
      navigationStyles: {
        fontSize: "1.0em",
      },
      numericFontSize: 1.0,
      categorias: [
        { title: "Moletons" },
        { title: "Camisetas" },
        { title: "Shorts" },
      ],

      universidades: [{ title: "CAASO" }, { title: "Federal" }],
      activeBtn: 1,
      nitens: null,
    };
  },
  created() {
    this.initialize()
  },
  methods: {
    async initialize() {
      this.$store.state.novidades = await this.findNovidades();
      this.$store.state.promocoes = await this.findPromocoes();
      this.$store.state.exclusivos = await this.findExclusivos();
    },

    async findNovidades() {
      //método get: pega todos os produtos com a categoria Novidades do Mongo(3 produtos):
      const response = await axios.get("http://localhost:3000/api/produtos/findNovidades");

      return response.data;
    },
    
    async findPromocoes() {
      //método get: pega todos os produtos do Mongo:
      const response = await axios.get("http://localhost:3000/api/produtos/findPromocoes");

      return response.data;
    },

    async findExclusivos() {
      //método get: pega todos os produtos do Mongo:
      const response = await axios.get("http://localhost:3000/api/produtos/findExclusivos");

      return response.data;
    },

    aumentarFontes() {
      console.info("AUMENTAR");

      this.numericFontSize += 0.1;
      if (this.numericFontSize >= 1.8) {
        this.numericFontSize = 1.8;
      }
      this.navigationStyles.fontSize = this.numericFontSize + "em";

      this.$store.dispatch("enlargeFont");
    },
    diminuirFontes() {
      console.info("DIMINUIR");

      this.numericFontSize -= 0.1;
      if (this.numericFontSize <= 0.8) {
        this.numericFontSize = 0.8;
      }

      this.navigationStyles.fontSize = this.numericFontSize + "em";

      this.$store.dispatch("reduceFont");
    },
    changeButtons() {
      if (this.$route.name === "Usuarios" || this.$route.name === "Estoque") {
        document.getElementById("btn1").href = "/usuarios";
        document.getElementById("btn2").href = "/estoque";
      }
    },
  },
  async beforeCreate() {
    this.nitens = await numberItensCart();
  }
};

async function numberItensCart() {
  const response = await axios.get("http://localhost:3000/api/carrinho");

  const products = response.data;
  
  return products.length;
}
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  background-color: #4dd0e1; /* Deixa cinza pra manter o contraste até acharmos uma cor melhor.. */
}

.v-btn {
  margin-right: 10px;
}

html,
body,
.v-application,
.v-application--wrap {
  min-height: -webkit-fill-available;
}

.v-main,
.v-content {
  padding: 0;
}

.v-bottom-navigation {
  top:60px;
}

.categorias {
  font-size: 1rem;
  color: black;
  margin-right: 10px;
  margin-left: 10px;
}
</style>
