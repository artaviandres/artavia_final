<template>
  <button>
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: String,
  }
}
</script>

<style>
  button {
    color: white;
    width: 80%;
    border: 2px solid white;
    background-color: transparent;
    max-width: 300px;
    font-size: 24px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-transform: uppercase;
    font-weight: bolder;
    margin-top: 24px;
    padding: 15px 0;
    cursor: pointer;
  }

  button:focus {
    outline: 0;
  }
</style>
