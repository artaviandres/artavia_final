<template>
  <div class="form-input">
    <label class="form-input-title">{{ title }}</label>
    <div class="form-input-wrapper" :style="width">
      <input :placeholder="placeholder" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: String,
    width: String,
    title: String,
  },
}
</script>

<style>
  @import '../styles/input.scss';
</style>
