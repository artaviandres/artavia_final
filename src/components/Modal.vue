<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <form>
          <Input placeholder="Jane Doe" width="width: 50%" title="Name" />
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
  import Input from './Input.vue';
  export default {
    name: 'Modal',
    props: {
      // label: String
    },
    components: {
      Input,
    }
  }
</script>

<style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    width: 100vw;
    height: 100vh;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity .3s ease;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  .modal-container {
    width: 90%;
    max-width: 500px;
    height: 600px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    color: black;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
  }

  .modal-container form {
    display: flex;
    justify-content: center;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
