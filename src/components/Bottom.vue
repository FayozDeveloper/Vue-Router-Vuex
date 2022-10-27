<template>
  <div class="container">
      <div class="left_side">
        <div class="info">
            <p class="frame_">ADDRESS:</p>
            <p>6391 Elgin St. Celina, Delaware 10299</p>
        </div>
        <div class="info">
            <p class="frame_">PHONE:</p>
            <p>+84 1102 2703</p>
        </div>
        <div class="info">
            <p class="frame_">EMAIL:</p>
            <p>hello@thebox.com</p>
        </div>
        <div class="info">
          <img src="../assets/LogoGroup.svg" alt="">
            <p class='logo'>TheBox</p>
        </div>
      </div>
      <div class="right_side">
        <div class="info2">
          <p class="frame_">NEWSLATTER:</p>
          <div class="input">
            <input type="text" placeholder="Your Email Here">
            <button>Subscribe</button>
          </div>
        </div>
        <div class="social">
          <p class="frame_">SOCIAL:</p>
          <div class="social_icons">
            <img src="../assets/fa-facebook.svg" alt="img not found">
            <img src="../assets/fa-insta.svg" alt="img not found">
            <img src="../assets/fa-twitter.svg" alt="img not found">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Bottom_section"
}
</script>

<style scoped>
  .container{
    display: flex;
    padding-top: 5vw;
    padding-bottom: 5vw;
    justify-content: space-between;
  }
  .left_side{
    width: 40%;
  }
  .right_side{
    width: 40%;
  }
  .info{
    display: flex;
    align-items: center;
  }
  .frame_{
    font-weight: 400;
    font-size: 20px;
    color: #2947A9;
    line-height: 23px;
    font-variant: small-caps;
    padding-right: 1.3vw;
  }
  .logo{
    font-style: italic;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    color: #2947A9;
  }

  input{
    width: 280px;
    height: 41px;
    background: #FFFFFF;
    border: 1px solid #E0E3EB;
    border-radius: 4px;
    padding-left: 5px;
    margin-right: 1vw;
  }
  :focus {
    outline: none;
  }


  button{
    width: 136px;
    height: 41px;
    background: #F9995D;
    border-radius: 4px;
    color: #F6F8F7;
    border: none;
    transition: 130ms ease;
  }
  button:hover{
    background-color: #f9815D;
    transition: 130ms ease;
  }

  .social{
    margin-top: 1vw;
  }

  img{
    margin-right: 1vw;
    text-align: center;
  }

  @media screen and (max-width: 768px){
    .container{
      width: 100%;
      display: inline-block;
      font-size: 15px;
    }
    .left_side{
      width: 100%;
    }
    .right_side{
      width: 100%;
      margin-top: 2pc;
    }
    button{
      margin-top: 3vw;
    }
    .social{
      margin-top: 2pc;
    }
  }

</style>