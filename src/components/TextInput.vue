<template>
  <div>
    <label>{{ label }}</label>
    <p>
      <input
        class="input"
        type="text"
        :id="id"
        :placeholder="placeholder"
        :value="value"
        :required="required"
        v-on:input="updateValue($event.target.value)"
      />
    </p>
  </div>
</template>

<script>
export default {
  name: "form-text",
  props: {
    id: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    updateValue: function (value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
label {
  display: block;
  text-transform: lowercase;
}

input[type="text"],
input[type="password"],
input[type="tel"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
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
</style>