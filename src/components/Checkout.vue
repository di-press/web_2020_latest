<template>
  <v-app>
    <div class="hello">
      <form id="register">
        <div class="container">
          <section class="payment">
            <div class="title">
              <h2>pagamento</h2>
            </div>

            <form-text
              v-model="card.number"
              label="Número do cartão"
              required="true"
              placeholder="Ex. 0123 4567 8901 2345"
              pattern="^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$"
              id="card-number"
            />
            <form-text
              v-model="card.name"
              label="Nome impresso no cartão"
              required="true"
              placeholder="Maria da Silva"
              id="card-number"
            />
            <form-text
              v-model="card.expiration"
              label="Validade"
              required="true"
              placeholder="10/10"
              pattern="[0-9]{2}/[0-9]{2}"
              id="card-number"
            />
            <form-text
              v-model="card.code"
              label="Cód. de Segurança"
              required="true"
              placeholder="123"
              pattern="[0-9]{3}"
              id="card-number"
            />

            <label>
              <input
                v-model="form.subscribe"
                type="checkbox"
                checked="checked"
                name="subscribe"
                style="margin-bottom: 15px"
              />
              Salvar o cartão para compras futuras
            </label>
          </section>

          <br />
          <br />

          <section class="delivery">
            <div class="title">
              <h2>entrega</h2>
            </div>

            <form-text
              v-model="address.cep"
              label="CEP"
              required="true"
              placeholder="12345-678"
              pattern="[0-9]{5}-[0-9]{3}"
              id="cep"
            />
            <form-text
              v-model="address.neighborhood"
              label="Bairro"
              required="true"
              placeholder="Ex. Morumbi"
              id="neighborhood"
            />
            <form-text
              v-model="address.city"
              label="Cidade"
              required="true"
              placeholder="Ex. São Paulo"
              id="city"
            />
            <form-text
              v-model="address.state"
              label="Estado"
              required="true"
              placeholder="Ex. SP"
              pattern="[A-Za-z]{2}"
              id="state"
            />
          </section>

          <section>
            <p>Total: 129.9</p>
          </section>
        </div>

        <div class="center mb-8">
          <v-btn class="black--text" color="primary" large
            >Finalizar Compra</v-btn
          >
        </div>
      </form>
    </div>
  </v-app>
</template>

<script>
import TextInput from "./TextInput";

export default {
  name: "RegistrationForm",
  components: {
    "form-text": TextInput,
  },
  data: function () {
    return {
      card: {
        number: null,
        name: null,
        expiration: null,
        code: null,
      },
      address: {
        city: null,
        state: null,
        neighborhood: null,
        number: null,
      },
      form: {},
    };
  },
};
</script>

<style scoped>
form {
  width: 500px;
  margin: 0 auto;
}

.container {
  padding: 10%;
}

h2 {
  margin-bottom: 30px;
}

.center {
  display: flex;
  justify-content: center;
}
</style>
