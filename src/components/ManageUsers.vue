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
                        v-model="editedItem.name"
                        label="Nome"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.id_usuario"
                        label="ID"
                      ></v-text-field>
                    </v-col>
                    <br />
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.email_usuario"
                        label="Email. Ex: marianasilva@gmail.com"
                        class="cabecalho"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.telefone"
                        label="Telefone"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.rua_usuario"
                        label="Rua. Ex: Av. São Carlos"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.bairro_usuario"
                        label="Bairro. Ex: Centro"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.num_usuario"
                        label="Número. Ex: 400"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.complemento_usuario"
                        label="Complemento. Ex: apto 22"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.cidade_usuario"
                        label="Cidade. Ex: São Carlos"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.estado_usuario"
                        label="Estado. Ex: SP"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.pais_usuario"
                        label="País. Ex: Brasil"
                      ></v-text-field>
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
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Nome do Usuário",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "ID", value: "id_usuario" },
      { text: "Email", value: "email_usuario" },
      { text: "Telefone", value: "telefone" },
      { text: "Ações", value: "acoes", sortable: false },
    ],
    usuarios: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      id_usuario: 0,
      email_usuario: "",
      telefone: 0,
      rua_usuario: "",
      bairro_usuario: "",
      cidade_usuario: "",
      complemento_usuario: "",
      num_usuario: 0,
      estado_usuario: "",
      pais_usuario: "",
    },
    defaultItem: {
      name: "",
      id_usuario: 0,
      email_usuario: 0,
      telefone: 0,
      rua_usuario: 0,
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
    initialize() {
      this.usuarios = [
        {
          name: "Gabriela Oliveira",
          id_usuario: 1,
          email_usuario: "gabizinha@gmail.com.br",
          telefone: "(16)993371458",
          rua_usuario: "Rua das Palmeiras",
          bairro_usuario: "",
          cidade_usuario: "São Carlos",
          complemento_usuario: "Apto 33",
          num_usuario: 40,
          estado_usuario: "SP",
          pais_usuario: "Brasil",
        },
        {
          name: "Marcos da Silva",
          id_usuario: 2,
          email_usuario: "marcosdasilva@hotmail.com",
          telefone: "(11)993841279",
          rua_usuario: "Rua das Acácias",
          bairro_usuario: "Jd Da Vida",
          cidade_usuario: "São Carlos",
          complemento_usuario: "Apto 14",
          num_usuario: 68,
          estado_usuario: "SP",
          pais_usuario: "Brasil",
        },
        {
          name: "Ângela Machado",
          id_usuario: 4,
          email_usuario: "angela@hotmail.com",
          telefone: "(11)99475339",
          rua_usuario: "Rua das Acácias",
          bairro_usuario: "Jd Da Vida",
          cidade_usuario: "São Carlos",
          complemento_usuario: "Apto 9",
          num_usuario: 68,
          estado_usuario: "SP",
          pais_usuario: "Brasil",
        },
        {
          name: "Rafael Duarte",
          id_usuario: 5,
          email_usuario: "rafa@hotmail.com",
          telefone: "(11)993841279",
          rua_usuario: "Rua Beija FLor",
          bairro_usuario: "Monjolinho",
          cidade_usuario: "São Carlos",
          complemento_usuario: "",
          num_usuario: 77,
          estado_usuario: "SP",
          pais_usuario: "Brasil",
        },
      ];
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

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.usuarios[this.editedIndex], this.editedItem);
      } else {
        this.usuarios.push(this.editedItem);
      }
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