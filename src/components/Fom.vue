<template>
  <div class="container-fluid">
  <div class="container">
      <p>What can us do for you ?</p>
      <h5>We are ready to work on a project of any complexity, whether it’s commercial or residential.</h5>
    <form>
      <div class='input'>
          <input type="text" placeholder="Your Name">
          <input type="text" placeholder="Email">
      </div>
      <div class='input'>
          <input type="text" placeholder="Reason for Contacting*">
          <input type="text" placeholder="Phone">
      </div>
      <div class="input">
        <textarea placeholder="Message" class="textA"/>
      </div>
      <button class="form_btn">
        Submit
      </button>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: "Fom_"
}
</script>

<style scoped>
  .container-fluid{
    background-color: #F6F8F7;
  }
  .container {
    text-align: center;
    /*margin-top: 10vw;*/
    align-items: center;
    /*padding-top: 3vw;*/
    padding-top: 7vw;
    padding-bottom: 3vw;
  }
  p{
    font-size: 36px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: 0;
  }
  form{
    margin-top: 3vw;
    margin-bottom: 3vw;
    align-items: center;
    justify-content: space-around;
  }

  .input{
    display: flex;
    margin-top: 3vw;
    margin-bottom: 3vw;
    align-items: center;
    justify-content: space-around;
  }

  input{
    width: 30%;
    height: 40px;
  }
  input:focus{
    outline: none;
  }
  textarea{
    width: 80%;
    margin: 0 auto;
    height: 135px;
    resize: none;
  }
  .form_btn{
    background: #2947A9;
    border-radius: 2px;
    height: 53px;
    width: 20%;
    color: #E0E3EB;
    border: none
  }
  @media screen and (max-width: 768px) {
    .container{
      width: 100%;
    }
    .input{
      width: 100%;
      display: inline-block;
    }

    input{
      width: 70%;
      margin-top: 1.5pc;
    }
    form{
      display: inline-block;
    }
    .form_btn{
      width: 60%;
      border-radius: 15px;
    }

    .textA:focus{
      outline: none;
    }

  }
</style>