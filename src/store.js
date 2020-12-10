import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        fontSize: 1.4,
        selectedProduct: [],
    },
    mutations: {
        setFont(state, size) {
            state.fontSize = size
        },
        setProduct(state, product) {
            //console.info("MUTATION " + product.name);
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
            //console.info("ACTION PRODUCT");
            commit('setProduct', product);
        }
    }
});