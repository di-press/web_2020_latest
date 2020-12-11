<!-- LEMBRAR DE NÃO DEIXAR O USUARIO INSERIR INPUTS VAZIOS -->
<template class="cadastro_de_produtos">
  <div class="cadastro_de_produtos">
    <!-- v-data é uma das estruturas do Vuetify com inflexibilidade em
     alterar a fonte. Também não é possível alterar a informação "rows
     per page", para padronizar a quantidade de prosutos visualizados
     por página-->
     <!-- "sort-by" permite ordenar cada coluna da tabela, quando se clica
      na seta da interface de usuário
     -->
    <v-data-table
      :headers="headers"
      :items="produtos"
      sort-by="id_produto"
      class="elevation-1"
      id="categorias_cabecalho"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title class="cadastro_de_produtos"
            >Gerenciar Produtos</v-toolbar-title
          >
          <v-divider class="mx-6" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="1000px" max-height="900%">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="black--text mv-8"
                v-bind="attrs"
                v-on="on"
              >
                Cadastrar Produto
              </v-btn>
              <br/>
            </template>

            <v-card class="ajuste">
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text class="cadastro_de_produtos">
                <v-container class="ajuste">
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        class="cadastro_de_produtos"
                        v-model="editedItem.name"
                        label="Nome"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.id_produto"
                        label="ID"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.preco_produto"
                        label="Preço (R$)"
                        class="cabecalho"
                        prefix="$"
                        suffix = ".00"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.unidades_estoque"
                        label="Em Estoque"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.unidades_vendidas"
                        label="Vendidos"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      class="d-flex"
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-select v-model="editedItem.cor" :items="items" label="Cor"></v-select>
                    </v-col>
                    <v-col
                      class="d-flex"
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-select v-model="editedItem.tam_produto" :items="tamanhos" label="Tamanho"></v-select>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.categoria_produto"
                        :items="categorias"
                        label="Categoria"
                      ></v-select>
                    </v-col>
                    <v-file-input
                      label="Inserir Foto"
                      filled
                      prepend-icon="mdi-camera"
                    ></v-file-input>
                    <v-col cols="12" sm="6" md="4">
                      <v-container fluid>
                        <v-textarea
                          id="area_texto"
                          name="input-7-1"
                          filled
                          v-model="editedItem.descricao_produto"
                          label="Descrição do Produto"
                          color="grey"
                          auto-grow
                          value="Ex: Canecas resistentes, de policarbonato, com a estampa CAASO. "
                        ></v-textarea>
                      </v-container>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-container fluid>
                        <v-textarea
                          id="area_texto"
                          name="input-7-1"
                          filled
                          label="Descrição da Imagem"
                          v-model="editedItem.descricao_foto"
                          color="grey"
                          auto-grow
                          value="Caneca na cor amarela, com alça em formato retangular, com a estampa do CAASO na cor preta."
                        ></v-textarea>
                      </v-container>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-acoes>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="close"> Cancelar </v-btn>
                <v-btn color="primary" text @click="save"> Salvar </v-btn>
              </v-card-acoes>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Você tem certeza que deseja deletar este produto?</v-card-title
              >
              <v-card-acoes>
                <v-spacer></v-spacer>
                <v-btn
                  class="cadastro_de_produtos"
                  color="blue darken-1"
                  text
                  @click="closeDelete"
                  >Cancelar</v-btn
                >
                <v-btn
                  class="cadastro_de_produtos"
                  color="blue darken-1"
                  text
                  @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-acoes>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <!-- Issue pendente no gitHub da biblioteca Vuetify.
      Há warning, porém não há nenhuma limitação em relação
      ao funcionamento -->
      <template v-slot:item.acoes="{ item }">
        <v-icon large class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon large @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    items: ["Azul", "Amarelo", "Preto"],
    tamanhos: ["P", "M", "G", "GG"],
    categorias: ["Moletons", "Camisetas", "Shorts", "Promoções", "Novidades", "Exclusivos"],
    headers: [
      {
        text: "Nome do Produto",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "ID", value: "id_produto" },
      { text: "Preço (R$)", value: "preco_produto" },
      { text: "Unidades em Estoque", value: "unidades_estoque" },
      { text: "Unidades Vendidas", value: "unidades_vendidas" },
      { text: "Lucro (R$)", value: "lucro" },
      { text: "Ações", value: "acoes", sortable: false },
    ],
    produtos: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      id_produto: "",
      preco_produto: "",
      unidades_estoque: 0,
      unidades_vendidas: 0,
      lucro: "",
      cor: "",
      tam_produto: "",
      categoria_produto: "",
      foto: "",
      descricao_produto: "",
      descricao_foto: "",
    },
    defaultItem: {
      name: "",
      id_produto: "",
      preco_produto: "",
      unidades_estoque: 0,
      unidades_vendidas: 0,
      lucro: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Cadastrar Produto" : "Editar Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();

    
  },

  methods: {
    async initialize() {
      this.produtos = await this.getProdutos();
    },

  //ao se editar o item, editedIndex já não é masi igual a -1;
    editItem(item) {
      this.editedIndex = this.produtos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.produtos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.produtos.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.removeProduto(this.editedItem._id);
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
        
      });
    },
      
    async getProdutos(){
      //método get: pega todos os produtos do Mongo:
      const response = await axios.get("http://localhost:3000/api/produtos");

      return response.data;
    },

    //a função "save" á análoga ao "add todo" do tutorial:
    async save() {

      // se editedIndex é diferente de -1, então o item existe e foi editado.
      // deve-se fazer PUT no backend:

      if (this.editedIndex > -1) {

        Object.assign(this.produtos[this.editedIndex], this.editedItem);

        
        await axios.put(`http://localhost:3000/api/produtos/${this.editedItem._id}`, {name: this.editedItem.name, id_produto: this.editedItem.id_produto, preco_produto: this.editedItem.preco_produto, unidades_estoque: this.editedItem.unidades_estoque, unidades_vendidas: this.editedItem.unidades_vendidas, cor: this.editedItem.cor, tam_produto: this.editedItem.tam_produto, categoria_produto: this.editedItem.categoria_produto, foto: this.editedItem.foto, descricao_produto: this.editedItem.descricao_produto, descricao_foto: this.editedItem.descricao_foto});
        this.produtos = await this.getProdutos();

      } 
      //caso editedIndex seja igual a -1, o produto acabou de ser criado.
      // deve se dar POST no backend:
      else {
        this.produtos.push(this.editedItem);

        await axios.post("http://localhost:3000/api/produtos", {name: this.editedItem.name, id_produto: this.editedItem.id_produto, preco_produto: this.editedItem.preco_produto, unidades_estoque: this.editedItem.unidades_estoque, unidades_vendidas: this.editedItem.unidades_vendidas, cor: this.editedItem.cor, tam_produto: this.editedItem.tam_produto, categoria_produto: this.editedItem.categoria_produto, foto: this.editedItem.foto, descricao_produto: this.editedItem.descricao_produto, descricao_foto: this.editedItem.descricao_foto});

        this.produtos = await this.getProdutos();
      }
      await this.close();
    },

    // beforeCreate é a função do Vue para inicializar um componente.
    // esta função carrega pra página de cadastrar produtos todos os produtos
    // já existentes no banco de dados:
    async beforeCreate(){
    
      console.log(this.response);
      //atribui os produtos do banco à variável "produtos":
      this.produtos = await this.getProdutos();
    },

    async removeProduto(_id){
      await axios.delete(`http://localhost:3000/api/produtos/${_id}`);
      this.produtos = await this.getProdutos();

    }
  },
};
</script>

<style scoped>
.cadastro_de_produtos /deep/ label {
  font-size: 1.2em;
}
#categorias_cabecalho /deep/ label{
  font-size: 1.4em;
}

/*.v-data-table /deep/ label {
    font-size: 1.4em;
    
}

.tabelinha /deep/ headers {
    font-size: 1.4em;
}

.cabecalho /deep/ label {
    font-size: 1.4em;
}

.v-text-field /deep/ label {
    font-size: 1.4em;
}

#area_texto{
    width: 800px;
}
table.v-table thead th {
      font-size: 14px !important;

}
*/

/*.v-data-table>.v-data-table__wrapper>table>tbody>tr>td{
  font-weight:bold;
  font-size:50px;
}*/
.v-text-field /deep/ label {
    font-size: 1.4em;
}
</style>