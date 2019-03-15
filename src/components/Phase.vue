<template>
  <div class="phase-wrapper">
    <i :class="icon" class="fa-3x"></i>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Phase',
  props: {
    title: String,
    description: String,
    icon: String,
  }
}
</script>

<style>
  @import '../styles/phase.scss';
</style>
