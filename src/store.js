import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        fontSize: 1.4
    },
    mutations: {
        setFont(state, size) {
            state.fontSize = size
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
        }
    }
});