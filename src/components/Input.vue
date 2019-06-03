<template>
  <div class="form-input">
    <label class="form-input-title">{{ title }}</label>
    <div class="form-input-wrapper" :style="width">
      <input :placeholder="placeholder" :type="type" />
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
    type: String,
  },
}
</script>

<style>
  @import '../styles/input.scss';
</style>
