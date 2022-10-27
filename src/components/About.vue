<template>
  <div class="container_about">
    <div class="container">
      <div class="image col-7">
        <img src="../assets/aboutPers.png" alt="img not found">
      </div>
      <div class="card_about">
        <div class="title">
          About us
        </div>
        <p class="desc">
          For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.
          <br>
          We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S
        </p>
        <button class="card_btn">
          More on OurHistory
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About_Page"
}
</script>

<style scoped>
  .container_about{
    display: flex;
    /*border: 1px solid red;*/
  }
  .container{
    display: flex;
    /*border:1px solid blue;*/
    padding: 0;
    position: relative;
  }
  .image{
    padding: 0;
    margin: 0;
    position: relative;
  }
  .card_about{
    display: inline-grid;
    justify-items: flex-start;
    width: 488px;
    height: 523px;
    top: 10%;
    left: 55%;
    background-color: #3559C7;
    position: absolute;
    padding: 2%;
    flex-direction: column;
    align-items: self-start;
  }
  .title{
    font-family: 'Work Sans';
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    color: #ffff;
  }
  .desc{
    display: flex;
    color: #fff;
    padding: 4%;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }
  .card_btn{
    border-radius: 3px;
    color: #3559C7;
    font-weight: 600;
    border: none;
    padding: 2%;
    transition: 100ms ease;
  }
  .card_btn:hover{
    border: 2px solid #ffffff;
    background-color: #3559C7;
    color: #ffffff;
    transition: 150ms ease;
  }

  @media screen and (max-width: 768px){
    .container{
      width: 100%;
      position: relative;
      height: 600px;
    }
    .card_about{
      width: 100%;
    }
    .image{
      width: 80%;
      margin: 0 auto;
      /*position: relative;*/
      display: none ;
    }
    .card_about{
      width: 80%;
      /*margin: 0 auto;*/
      height: 500px;
      margin-left: -200px;

    }
    .title{
      font-family: 'Work Sans';
      font-weight: 700;
      font-size: 30px;
      line-height: 22px;
      color: #ffff;
    }
    .desc{
      display: flex;
      color: #fff;
      padding: 2%;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 20px;
    }
    .card_btn{
      border-radius: 3px;
      color: #3559C7;
      font-weight: 600;
      border: none;
      padding: 2%;
      transition: 100ms ease;
    }



  }
  @media screen and (max-width: 991px){
    .container{
      width: 100%;
      position: relative;
      height: 600px;
    }
    .card_about{
      width: 80%;
      margin-left: -55%;
    }
    .image{
      width: 80%;
      margin: 0 auto;
      /*position: relative;*/
      display: none ;
    }

  }
  @media screen and (max-width: 992px){
    .card_about{
      width: 100%;
    }
  }




</style>