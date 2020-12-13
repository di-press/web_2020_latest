<template class="cadastro_usuarios">
  <div class="cadastro_usuarios">
    <v-data-table
      :headers="headers"
      :items="usuarios"
      sort-by="id_usuario"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title class="cadastro_usuarios"
            >Gerenciar Usuários</v-toolbar-title
          >
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="1000px" max-height="900%">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary black--text"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                Cadastrar Usuário
              </v-btn>
            </template>
            <br />
            <br />
            <v-card class="ajuste">
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text class="cadastro_usuarios">
                <v-container class="ajuste">
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        class="cadastro_usuarios"
                        v-model="editedItem.nome"
                        label="Nome e sobrenome"
                        placeholder="Digite o nome completo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.cpf"
                        label="CPF"
                        v-mask="'###.###.###-##'"
                        placeholder="Ex: 123.456.789-00"
                      ></v-text-field>
                    </v-col>
                    <br />
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.email"
                        label="Email"
                        placeholder="Ex. marianasilva@gmail.com"
                        class="cabecalho"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.senha"
                        label="Senha"
                        type="password"
                        placeholder="********"
                        class="cabecalho"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.telefone"
                        label="Telefone"
                        placeholder="Ex: (99) 12345-6789"
                        v-mask="['(##)####-####','(##)#####-####']"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.dataDeNascimento"
                        label="Data de nascimento"
                        placeholder="Ex: 11/22/2000"
                        v-mask="'##/##/####'"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.endereco"
                        label="Digite o endereço"
                        placeholder="Ex: Av. São Carlos, 500, Centro - São Carlos"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-checkbox
                      label="É administrador?"
                      />
                    </v-col>
                    
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-acoes>
                <v-spacer></v-spacer>
                <v-btn color="orange darken-4" text @click="close">
                  Cancelar
                </v-btn>
                <v-btn color="orange darken-4" text @click="save">
                  Salvar
                </v-btn>
              </v-card-acoes>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline"
                >Você tem certeza que deseja deletar este usuário?</v-card-title
              >
              <v-card-acoes>
                <v-spacer></v-spacer>
                <v-btn
                  class="cadastro_usuarios"
                  color="blue darken-1"
                  text
                  @click="closeDelete"
                  >Cancelar</v-btn
                >
                <v-btn
                  class="cadastro_usuarios"
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
    headers: [
      {
        text: "Nome do Usuário",
        align: "start",
        sortable: false,
        value: "nome",
      },
      { text: "ID", value: "id_usuario" },
      { text: "Email", value: "email" },
      { text: "Telefone", value: "telefone" },
      { text: "Ações", value: "acoes", sortable: false },
    ],
    usuarios: [],
    editedIndex: -1,
    editedItem: {
      nome: "",
      email: "",
      cpf: '',
      telefone: '',
      endereco: "",
    },
    defaultItem: {
      nome: "",
      email: "",
      telefone: '',
      endereco: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Cadastrar Usuário" : "Editar Usuário";
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
      this.usuarios = await this.getUsuarios();
    },
    async beforeCreate(){
      this.usuarios = await this.getUsuarios();
    },


    editItem(item) {
      this.editedIndex = this.usuarios.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.usuarios.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.usuarios.splice(this.editedIndex, 1);
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
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async getUsuarios(){
      //método get: pega todos os usuários do Mongo:
      const response = await axios.get("http://localhost:3000/api/auth/find");
      console.log(response.data)

      return response.data;
    },

    async save() {
      if (this.editedIndex > -1) {
        Object.assign(this.usuarios[this.editedIndex], this.editedItem);
        
        //await axios.post("http://localhost:3000/api/auth/signup", {nome: this.editedItem.nome, senha: this.editedItem.});
        //this.usuarios = await this.getUsuarios();
      
      } else {        
        this.usuarios.push(this.editedItem);

        // parece que se desmembrar os parâmetros em várias linhas, não funciona direito!
        // deixar todos os parâmetros em uma linha, feio mesmo
        //await axios.post("http://localhost:3000/api/auth/signup", {nome: this.editedItem.nome, id_produto: this.editedItem.id_produto, preco_produto: this.editedItem.preco_produto, unidades_estoque: this.editedItem.unidades_estoque, unidades_vendidas: this.editedItem.unidades_vendidas, cor: this.editedItem.cor, tam_produto: this.editedItem.tam_produto, categoria_produto: this.editedItem.categoria_produto, foto: this.editedItem.foto, descricao_produto: this.editedItem.descricao_produto, descricao_foto: this.editedItem.descricao_foto});

        //this.produtos = await this.getUsuarios();
      }
      //await this.close();
      this.close();
    },
  },
};
</script>

<style scoped>
.cadastro_usuarios /deep/ label {
  font-size: 1.2em;
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
</style>