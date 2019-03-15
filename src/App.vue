<template>
  <div class="container">
    <Header @openModal="toggleModal" :scrolled="scrolled" />
    <div id="app">
      <h1 class="hello">Hello!</h1>
      <h1 class="im-andres"> I'm Andrés :)</h1>
      <p class="intro">I'm a Costa Rican based Web Developer, eager to work on new projects, and to develop new ideas!</p>
      <Modal v-if="showModal" @close="showModal = false" />
    </div>
    <div class="scroll">
        <p>SCROLL</p>
        <i class="fas fa-angle-down fa-2x"></i>
      </div>
    <div class="section">
      <h1>Let's Work Together!</h1>
      <div class="phases">
        <Phase
          title="Let's hear your idea"
          description="Based on the type of application and requirements that you need, we can choose the technologies stack."
          icon="fas fa-lightbulb"
        />
        <Phase
          title="Create a well-structured Backend"
          description="According to the project's needs, we could start constructing a database, relational or non-relational, and a REST API."
          icon="fas fa-database"
        />
        <Phase
          title="Create a beautiful interface"
          description="In order to attract new clients, your app needs to be as simple to use, and as eye-catching as it can be."
          icon="fas fa-desktop"
        />
      </div>
    </div>
    <div class="section gray-section">
      <h1>What technologies do I work on?</h1>
      <p>I'm a Javascript enthusiast, and I <b>strongly</b> believe in high performance and optimal run times. This said, you'll often see me working with technologies such as
        <a href="https://reactjs.org/" target="_blank">React</a>,
        <a href="https://vuejs.org/" target="_blank">Vue</a>,
        <a href="https://angular.io/" target="_blank">Angular</a>,
        <a href="https://nodejs.org/en/" target="_blank">Node</a>,
        <a href="https://www.mongodb.com/" target="_blank">Mongo</a>.
      </p>
    </div>
    <div class="section">
      <h1>About Andrés</h1>
      <p>
        I'm a 21 years old developer from Costa Rica, With more than 3 years of web development experience.
        <br/> I <b>love</b> learning new things.
        <br/> I <b>love</b> keeping myself up-to-date with the software market.
        <br />I <b>love</b> feeling challenged by a complicated task to solve.
      </p>
      <span>More than just a developer, I consider myself an entrepeneur.</span>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Modal from './components/Modal.vue';
import Phase from './components/Phase.vue';
import Header from './components/Header.vue';

export default {
  name: 'app',
  components: {
    Footer,
    Modal,
    Phase,
    Header,
  },
  methods: {
    toggleModal() {
      this.showModal = true;
    },
    handleScroll () {
      this.scrolled = window.scrollY > 0;
    }
  },
  data: () => ({
    showModal: false,
    scrolled: false
  }),
  created () {
    document.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    document.addEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,800');
  body {
    margin: 0;
    overflow-x: hidden;
  }
  ::selection {
    background: #ff5f6d;
    color: white;
  }
</style>

<style lang="scss" scoped>
  @import './styles/app.scss';
</style>
