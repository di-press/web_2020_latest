<template>
  <button type="button" class="btn" :id="id">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "button",
  props: {
    id: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>


<style scoped>
button {
  background-color: #f96900;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  opacity: 0.9;
  display: block;
  font-weight: bold;
  text-transform: lowercase;
}

button:hover {
  opacity: 1;
}
</style>