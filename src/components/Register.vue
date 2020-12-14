<template>
  <v-app>
    <div class="hello">
      <form
        id="register"
      >
        <div class="container">
          <div class="title">
            <h1>Cadastre-se</h1>
            <br/>
            <p>Preencha o formulário abaixo</p>
          </div>

          <label for="Email">E-mail:</label>
          <input
            v-model="form.mail"
            type="email"
            id="mail"
            name="mail"
            placeholder="Ex: mariadasilva@gmail.com"
            required="true"
          />

          <label for="password">Senha:</label>
          <input
            v-model="form.pass"
            type="password"
            id="pass"
            name="pass"
            placeholder="Digite sua senha"
            required="true"
          />

          <label for="id">CPF:</label>
          <input
            v-model="form.cpf"
            type="text"
            id="id"
            name="id"
            placeholder="Ex: 123.456.789-00"
            title="Número não confere com o padrão."
            required="true"
            v-mask="'###.###.###-##'"
          />

          <label for="name">Nome e sobrenome:</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            required="true"
          />

          <label for="birth">Data de nascimento:</label>
          <input
            v-model="form.birth"
            type="text"
            id="birth"
            name="birth"
            placeholder="Ex: 01/01/1999"
            required="true"
            v-mask="'##/##/####'"
            
          />

          <label for="adress">Endereço:</label>
          <input
            v-model="form.address"
            type="text"
            id="address"
            name="address"
            placeholder="Ex: Av São carlos, 500, Centro - São Carlos"
            required="true"
          />
          <label for="phone">Telefone:</label>
          <input
            v-model="form.phone"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Ex: (99) 12345-6789"
            title="Número não confere com o padrão."
            required="true"
            v-mask="['(##) ####-####','(##) #####-####']"
          />

          <label>
            <input
              type="checkbox"
              checked="checked"
              name="subscribe"
              style="margin-bottom: 15px"
            />
            Desejo receber ofertas por e-mail
          </label>
          <br/>
          <div class="center">
            <v-btn color="primary" class="black--text" large @click="submitForm"> 
              finalizar cadastro
            </v-btn>
          </div>
        </div>
      </form>
      <p class="signin">
        <span>Já tem um cadastro? </span>
        <a href="/entrar">Entrar</a>
      </p>
    </div>
  </v-app>
</template>

<script>
import AuthService from '../services/auth'

export default {
  name: "RegistrationForm",
  data: function () {
    return {
      storeFont: 1.4,
      styles: {
        fontSize: '1.0em'
      },
      numericFontSize: 1.0,
      form: {
        mail: null,
        pass: null,
        cpf: null,
        name: null,
        birth: null,
        address: null,
        phone: null,
      },
    };
  },
  methods: {
    async submitForm() {
      const response = await AuthService.register(this.form)
      if (response.data.token) {
        window.location.href = "/";
      }
    },
    aumentarFonte() {
      this.numericFontSize += 0.1
      if (this.numericFontSize >= 1.4) {
        this.numericFontSize = 1.4;
      }
      this.styles.fontSize = this.numericFontSize + 'em';
    },
    diminuirFonte() {
      this.numericFontSize -= 0.1
      if (this.numericFontSize <= 1.0) {
        this.numericFontSize = 1.0;
      }
      this.styles.fontSize = this.numericFontSize + 'em';
    }
  },
  watch: {
    '$store.state.fontSize': function() {
      console.log(this.$store.state.fontSize);
      if (this.$store.state.fontSize > this.storeFont) {
        this.aumentarFonte()
      }
      else { 
        this.diminuirFonte()
      }

      this.storeFont = this.$store.state.fontSize;
    },
  }
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

.title {
  text-align: center;
  margin-bottom: 30px;
}

h2 {
  margin: 10px 0;
}

label {
  display: block;
  font-size: 1.3em;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
input[type="tel"]:focus {
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

.signin {
  text-align: center;
  margin: 10px;
}

.center {
  display: flex;
  justify-content: center;
}
</style>
