<template>
  <div :class="scrolled ? 'header-wrapper header-on-scroll' : 'header-wrapper'">
    <div class="header-logo">
      <img src="../assets/logo_white.svg" @click="goToTop" />
    </div>
    <div class="header-options">
      <a href="./AndresArtavia_CV.pdf" target="_blank">CV</a>
      <a @click="emitEvent">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    clickContact: Function,
    scrolled: Boolean,
  },
  methods: {
    emitEvent() {
      this.$emit('openModal');
    },
    goToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style>
  @import '../styles/header.scss';
</style>
