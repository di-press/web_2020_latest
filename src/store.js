import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [ createPersistedState() ],
    state: {
        fontSize: 1.4,
        selectedProduct: [],
        novidades: [],
        promocoes: [],
        exclusivos: [],
        palavraBuscada: ''
    },
    mutations: {
        setFont(state, size) {
            state.fontSize = size
        },
        setProduct(state, product) {
            console.info("MUTATION " + product.name);
            state.selectedProduct = product
        }
    },
    actions: {
        enlargeFont({state, commit}) {
            //console.info('ENLARGE');
            commit('setFont', state.fontSize+0.1);
        },
        reduceFont({state, commit}) {
            //console.info('REDUCE');
            commit('setFont', state.fontSize-0.1);
        },
        updateProduct({commit}, product) {
            console.info("ACTION PRODUCT");
            commit('setProduct', product);
        },

        pesquisar({state, commit}) {
            commit('updateBusca', state.busca);            
        }
    }
});