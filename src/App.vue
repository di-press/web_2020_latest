<template>
  <v-app>
    <!-- Must have the app property -->
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="white"
      dark
    >
      <!-- Cabeçalho -->
      <v-toolbar-title style="width: 350px">
        <a href="/" style="text-decoration: none"
          ><v-icon>mdi-alpha-b-circle</v-icon>&nbsp;BeUni</a
        >
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Buscar"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
      <v-btn v-on="on" href="/carrinho" class="black--text" color="primary">
        Carrinho
        <v-badge content="1" value="1" color="red">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      <v-btn href="/registrar" class="black--text" color="primary">
        Registrar
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-bottom-navigation :value="activeBtn" horizontal class="primary">
        <a
          v-for="(categoria, index) in categorias"
          :key="index"
          href="/produtos"
          class="v-btn"
        >
          <span>{{ categoria.title }}</span>
        </a>

        <v-menu open-on-hover offset-y>
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
        </v-menu>
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
        <v-card-text>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-home</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-calendar</v-icon>
          </v-btn>
          <v-btn class="mx-4 white--text" icon>
            <v-icon size="24px">mdi-delete</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>BeUni</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      categorias: [
        { title: "Moletons" },
        { title: "Camisetas" },
        { title: "Shorts" },
        { title: "Brindes" },
      ],
      universidades: [{ title: "CAASO" }, { title: "Federal" }],
      activeBtn: 1,
    };
  },
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

.v-btn {
  margin-right: 10px;
}
</style>
