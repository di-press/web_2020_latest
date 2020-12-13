import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import ListaDeProdutos from "@/components/ListaDeProdutos";
import Login from "@/components/Login";
import Produto from "@/views/ProductView";
import Carrinho from "@/views/Cart";
import Registrar from "@/components/Register";
import Finalizar from "@/components/Checkout";
import Estoque from "@/components/ManageProducts";
import Usuarios from "@/components/ManageUsers";

import AuthService from '../services/auth'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home"
    },
    {
      path: "/produtos",
      component: ListaDeProdutos,
      name: "ListaDeProdutos"
    },
    {
      path: "/produto",
      component: Produto,
      name: "Produto"
    },
    {
      path: "/carrinho",
      component: Carrinho,
      name: "Carrinho"
    },
    {
      path: "/registrar",
      component: Registrar,
      name: "Registrar"
    },
    {
      path: "/finalizar",
      component: Finalizar,
      name: "Finalizar"
    },
    {
      path: "/entrar",
      component: Login,
      name: "Entrar"
    },
    {
      path: "/estoque",
      component: Estoque,
      name: "Estoque", 
      beforeEnter: (to, from, next) => {
        if (AuthService.isAdmin()) {
          next()
        } else {
          next({
            name:'Home'
          })
        }
      }
    },
    {
      path: "/usuarios",
      component: Usuarios,
      name: "Usuarios",
      beforeEnter: (to, from, next) => {
        if (AuthService.isAdmin()) {
          next()
        } else {
          next({
            name:'Home'
          })
        }
      }
    }
  ],
  mode: "history"
});
