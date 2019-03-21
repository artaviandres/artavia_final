<template>
  <div id="footer-container">
    <div class="footer-info">
      <div class="social-container">
        <a class="social-icon" href="mailto:artaviandres@gmail.com">
          <i class="fas fa-envelope"></i>
        </a>
        <a class="social-icon" href="https://www.facebook.com/artaviandres" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a class="social-icon" href="https://twitter.com/Artvavia" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a class="social-icon" href="https://www.linkedin.com/in/artaviandres/" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div class="personal-info">
        <p>(+506) 6382-2481</p>
        <p>artaviandres@gmail.com</p>
        <p>San José, Costa Rica</p>
      </div>
    </div>
    <div class="copyright">
      <p>©2019. All rights reserved</p>
      <p class="division">|</p>
      <p>Designed & Developed by Andrés Artavia</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
  #footer-container {
    background-color: rgb(238, 238, 238);
    color: black;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .footer-info {
    width: 60%;
    display: flex;
    align-items: center;
  }

  .social-container {
    display: flex;
    justify-content: flex-start;
    width: 50%;
    padding-left: 50px;
  }

  .social-icon {
    cursor: pointer;
    margin-right: 15px;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #ff5f6d 0%, #ffc371 100%);
    text-decoration: none;
    border-radius: 50%;
  }
  .social-icon i {
    color: white;
    font-size: 1.5em;
  }

  .social-icon:nth-child(4) {
    margin-right: 0;
  }

  .social-icon:hover {
    color: rgb(255, 227, 152);
  }

  .personal-info {
    text-align: right;
    padding-right: 50px;
    width: 50%;
  }

  .personal-info p {
    margin: 0;
  }

  .copyright {
    width: 60%;
    border-top: 1px solid #ff5f6d;
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }

  .copyright .division {
    margin: 0 50px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 990px) {
    .copyright {
      width: 80%;
    }
  }

  @media (max-width: 740px) {
    .copyright {
      width: 98%;
      flex-direction: column;
      align-items: center;
      padding-top: 15px;
      margin-bottom: 20px;
    }

    .copyright p {
      margin: 0;
    }

    .copyright .division {
      display: none;
    }
  }
</style>
