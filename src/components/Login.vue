<template>
  <v-app>
    <div class="hello">
      <form
        id="register"
        @submit.prevent="checkForm"
        action="https://vuejs.org/"
        method="post"
      >
        <div class="container">
          <h2>Entrar</h2>
          <br />
          <label for="email">E-mail:</label>
          <input
            v-model="form.mail"
            type="email"
            id="mail"
            name="mail"
            placeholder="Ex: nome@gmail.com"
            required="true"
            :rules="emailRules"
          />

          <label for="password">Senha:</label>
          <input
            v-model="form.pass"
            type="password"
            id="pass"
            name="pass"
            placeholder="Digite sua senha"
            required="true"
            @change="validatePassword($event)"
          />

          <v-btn
            color="primary"
            class="mx-auto black--text"
            large
            type="submit"
            @click="checkForm"
          >
            Entrar
          </v-btn>
        </div>
      </form>
    </div>
  </v-app>
</template>

<script>
 
import AuthService from '../services/auth'

export default {
  name: "RegistrationForm",
  data: function () {
    return {
      form: {
        mail: null,
        pass: null,
      },
      emailRules: [ 
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail deve ser valido'
      ],
    };
  },
  methods: {
    async redirect () {
      const response = await AuthService.login(this.form)
      if (response.data.token) {
        window.location.href = "/";
      }
    },
    checkForm() {
      var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      var flag = regex.exec(this.form.mail);
      var target = document.getElementById("mail");
      if (!flag) {
        target.setCustomValidity("E-mail inválido");
      }
      else {
        target.setCustomValidity("");
        this.redirect();
      }
    }
  },
};
</script>

<style scoped>
form {
  width: 500px;
  margin: 0 auto;
}

.container {
  padding: 10px;
}

h2 {
  text-align: center;
}

label {
  display: block;
  font-size: 1.3em;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

::placeholder {
  color: #A5A8A9;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: red;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: red;
}
</style>
