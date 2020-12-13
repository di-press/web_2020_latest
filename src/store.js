import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [ createPersistedState() ],
    state: {
        fontSize: 1.4,
        produtos: [],
        ultimaBusca: "",
        produtoPesquisado: [],
        selectedProduct: [],
        novidades: [],
        promocoes: [],
        exclusivos: [],
    },
    mutations: {
        setFont(state, size) {
            state.fontSize = size
        },
        setProdutos(state, produtos) {
            state.produtos = produtos;
        },
        setNovidades(state, novidades) {
            state.novidades = novidades;
        },
        setPromocoes(state, promocoes) {
            state.promocoes = promocoes;
        },
        setExclusivos(state, exclusivos) {
            state.exclusivos = exclusivos;
        },
        setProduct(state, product) {
            state.selectedProduct = product
        },
        filtraProdutos(state, busca) {
            /*
            Limpamos o vetor que armazena os produtos e inserimos novos produtos
            que satisfazem os critérios de busca
            */
            state.produtoPesquisado = []
            busca = busca.toLowerCase();
            state.ultimaBusca = busca;

            var numeroDeProdutos = state.produtos.length;
            for (var i = 0; i < numeroDeProdutos; ++i) {
                /*
                Armazenamos tanto a string do nome quanto da descrição minúsculas
                para fazer a busca por substring, que também foi convertida para minúscula
                */
                var nome = state.produtos[i].name.toLowerCase();
                var descricao = state.produtos[i].descricao_produto.toLowerCase();

                if (nome.includes(busca) || descricao.includes(busca)) {
                    state.produtoPesquisado.push(state.produtos[i]);
                }
            }
        },
        filtraBuscaPorCor(state, cores) {
            if (state.produtoPesquisado.length === 0 || cores.length === 0) {
                return;
            }
            
            state.produtoPesquisado = state.produtoPesquisado.filter(item => !(cores.indexOf(item.cor) == -1));
        },
        filtraBuscaPorTamanho(state, tamanhos) {
            if (state.produtoPesquisado.length === 0 || tamanhos.length == 0) {
                return;
            }

            state.produtoPesquisado = state.produtoPesquisado.filter(item => !(item.tam_produto !== "" && tamanhos.indexOf(item.tam_produto) == -1));
        },
        filtraBuscaPorPreco(state, preco) {
            if (state.produtoPesquisado.length === 0) {
                return;
            }
            
            state.produtoPesquisado = state.produtoPesquisado.filter(item => !(item.preco_produto > preco));
        },
    },
    actions: {
        enlargeFont({state, commit}) {
            commit('setFont', state.fontSize+0.1);
        },
        reduceFont({state, commit}) {
            commit('setFont', state.fontSize-0.1);
        },
        salvaProdutos({commit}, produtos) {
            commit('setProdutos', produtos);
        },
        salvaNovidades({commit}, novidades) {
            commit('setNovidades', novidades);
        },
        salvaPromocoes({commit}, promocoes) {
            commit('setPromocoes', promocoes);
        },
        salvaExclusivos({commit}, exclusivos) {
            commit('setExclusivos', exclusivos);
        },
        updateProduct({commit}, product) {
            console.info("ACTION PRODUCT");
            commit('setProduct', product);
        },
        registraBusca({commit}, busca) {
            console.info("ACTIONS string: " + busca);
            commit('filtraProdutos', busca);
        },
        filtraPorCor({commit}, cores) {
            commit('filtraBuscaPorCor', cores);
        },
        filtraPorPreco({commit}, preco) {
            commit('filtraBuscaPorPreco', preco);
        },
        filtraPorTamanho({commit}, tamanhos) {
            commit('filtraBuscaPorTamanho', tamanhos);
        },
    }
});