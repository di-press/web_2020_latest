<template class="cadastro_de_produtos">
  <div class="cadastro_de_produtos">
      <v-data-table
        :headers="headers"
        :items="produtos"
        sort-by="id_produto"
        class="elevation-1"
        >
        <template v-slot:top>
        <v-toolbar
            flat
        >
            <v-toolbar-title class="cadastro_de_produtos">Gerenciar Produtos</v-toolbar-title>
            <v-divider
            class="mx-4"
            inset
            vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog
            v-model="dialog"
            max-width="1000px"
            max-height="900%"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="orange darken-4"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
                >
                Cadastrar Produto
                </v-btn>
            </template>
       
            <v-card class="ajuste">
                <v-card-title>
                <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text class="cadastro_de_produtos">
                <v-container class="ajuste">
                    <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field class="cadastro_de_produtos"
                        v-model="editedItem.name"
                        label="Nome"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                        v-model="editedItem.id_produto"
                        label="ID"
                        ></v-text-field>
                    </v-col>
                  
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                        v-model="editedItem.preco_produto"
                        label="Preço (R$)"
                        class="cabecalho"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                        v-model="editedItem.unidades_estoque"
                        label="Em Estoque"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-text-field
                        v-model="editedItem.unidades_vendidas"
                        label="Vendidos"
                        ></v-text-field>
                        
                    </v-col>
                    <v-col
                    v-model="editedItem.cor"
                      class="d-flex"
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-select
                        :items="items"
                        label="Cor"
                      ></v-select>
                    </v-col>
                    <v-col
                    v-model="editedItem.tam_produto"
                      class="d-flex"
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-select
                        :items="tamanhos"
                        label="Tamanho"
                      ></v-select>
                    </v-col>
                    <v-col
                      class="d-flex"
                      cols="12"
                      sm="6"
                      md="4"
                    >
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
                        <v-col
                        cols="12"
                        sm="6"
                        md="4"
                        >
                        
                        <v-container fluid>
                          
                            <v-textarea id="area_texto"
                            name="input-7-1"
                            filled
                            label="Descrição do Produto"
                            color="grey"
                            auto-grow
                            value="Ex: Canecas resistentes, de policarbonato, com a estampa CAASO. "
                            ></v-textarea>
                        </v-container>
                        
                    </v-col>
                    <v-col
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <v-container fluid>
                        <v-textarea id="area_texto"
                        name="input-7-1"
                        filled
                        label="Descrição da Imagem"
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
                <v-btn
                    color="orange darken-4"
                    text
                    @click="close"
                >
                    Cancelar
                </v-btn>
                <v-btn
                    color="orange darken-4"
                    text
                    @click="save"                    
                >
                    Salvar
                </v-btn>
                </v-card-acoes>
            </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
                <v-card-title class="headline">Você tem certeza que deseja deletar este produto?</v-card-title>
                <v-card-acoes>
                <v-spacer></v-spacer>
                <v-btn class="cadastro_de_produtos" color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                <v-btn class="cadastro_de_produtos" color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
                </v-card-acoes>
            </v-card>
            </v-dialog>
        </v-toolbar>
        </template>
        <template v-slot:item.acoes="{ item }">
        <v-icon
            large
            class="mr-2"
            @click="editItem(item)"
        >
            mdi-pencil
        </v-icon>
        <v-icon
            large
            @click="deleteItem(item)"
        >
            mdi-delete
        </v-icon>
        </template>
        <template v-slot:no-data>
        <v-btn
            color="primary"
            @click="initialize"
        >
            Reset
        </v-btn>
        </template>
    </v-data-table>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      items: ['Azul', 'Amarelo', 'Laranja'],
      tamanhos: ['PP','P', 'M', 'G', 'GG'],
      categorias: ["Moletons", "Acessórios", "Caneca", "Camiseta"],
      headers: [
        {
          text: 'Nome do Produto',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'ID', value: 'id_produto' },
        { text: 'Preço (R$)', value: 'preco_produto' },
        { text: 'Unidades em Estoque', value: 'unidades_estoque' },
        { text: 'Unidades Vendidas', value: 'unidades_vendidas' },
        { text: 'Lucro (R$)', value: 'lucro' },
        { text: 'Ações', value: 'acoes', sortable: false },
      ],
      produtos: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        id_produto: 0,
        preco_produto: 0,
        unidades_estoque: 0,
        unidades_vendidas: 0,
        lucro: 0,
        cor: "",
        tam_produto: "",
        categoria_produto: ""

      },
      defaultItem: {
        name: '',
        id_produto: 0,
        preco_produto: 0,
        unidades_estoque: 0,
        unidades_vendidas: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Cadastrar Produto' : 'Editar Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.produtos = [
          {
            name: 'Camiseta Style',
            id_produto: 1,
            preco_produto: "50,00",
            unidades_estoque: 18,
            unidades_vendidas: 9,
            lucro: "450,00",
            cor: "Azul",
            tam_produto: "M",
            categoria_produto: "Camisetas"
          },
          {
            name: 'Caneca CAASO',
            id_produto: 2,
            preco_produto: "30,00",
            unidades_estoque: 100,
            unidades_vendidas: 5,
            lucro: "150,00",
            cor: "Amarelo",
            tam_produto: "",
            categoria_produto: ""
          },
          {
            name: 'Bermuda Confortável',
            id_produto: 3,
            preco_produto: "60,00",
            unidades_estoque: 13,
            unidades_vendidas: 6,
            lucro: "360,00",
            cor: "Amarelo",
            tam_produto: "G",
            categoria_produto: ""
          },
          {
            name: 'Moleton Algodão estampa CAASO',
            id_produto: 4,
            preco_produto: "200,00",
            unidades_estoque: 100,
            unidades_vendidas: 10,
            lucro: "2000,00",
            cor: "Laranja",
            tam_produto: "M",
            categoria_produto: "Moletons"
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.produtos.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.produtos.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.produtos.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.produtos[this.editedIndex], this.editedItem)
        } else {
          this.produtos.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>

<style scoped>


.cadastro_de_produtos /deep/ label {
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