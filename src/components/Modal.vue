<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <a class="modal-close" @click="emitClose"><i class="fas fa-times"></i></a>
        <form v-on:submit.prevent="submitForm">
          <img src="../assets/logo.svg" />
          <input v-model="from_name" />
          <!-- <Input placeholder="Jane Doe" width="width: 70%" title="Enter Name" type="text" model="from_name" /> -->
          <Input placeholder="janedoe@gmail.com" width="width: 70%" title="Enter Email" type="email" model="reply_to" />
          <Input placeholder="this is a random message." width="width: 70%" title="Enter Message" type="text" model="message_html" />
          <button>submit</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
  import Input from './Input.vue';
  export default {
    name: 'Modal',
    data: () => ({
      from_name: '',
      reply_to: '',
      message_html: '',
    }),
    created(){
      emailjs.init("user_kCRwRozcLUM6fPoa7V0hs");
    },
    methods: {
      emitClose() {
        this.$emit('closeModal');
      },
      submitForm() {
        let data = {
          from_name: this.from_name,
          reply_to: this.reply_to,
          message_html: this.message_html
        };
        emailjs.send(
          "default_service",
          "andres_personal",
          data,
        );
      }
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
    flex-direction: column;
    align-items: center;
  }

  .modal-container form img {
    width: 120px;
    margin: 30px 0;
  }

  .modal-close {
    margin-left: 98%;
    cursor: pointer;
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
