<template>
  <div class="container-fluid">
    <div class="container">
        <div class="info">
          <p>Free consultation with exceptional quality</p>
          <h5>Just one call away: +84 1102 2703</h5>
        </div>
        <div class='btn_section'>
          <button>
            Get your consultation
          </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ads_"
}
</script>

<style scoped>
.container-fluid{
  width: 100%;
  height: 300px;
  background-image: url("../assets/unsplash_MP0bgaS_d1c.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.container{
  height: 100%;
  display: flex;
  align-items: center;
}
  .info{
    width: 70%;
    color: #ffffff;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
  }

  .btn_section{
    width: 30%;
  }

  button{
    width: 232px;
    height: 53px;
    right: 160px;
    top: 124px;
    background: transparent;
    color: #E0E3EB;
    border: 1px solid #E0E3EB;
  }

  @media screen and (max-width: 468px){
    .container-fluid{
      width: 100%;
      padding-top: 5pc;
    }

    .container{
      display: inline-block;
    }

    .info{
      width: 100%;
      font-size: 30px;
      /*border:1px solid red;*/
    }
    .btn_section{
      width: 100%;
      margin-top: 3pc;
      /*border:1px solid blue;*/
      display: flex;
      justify-content: center;
    }

  }
  @media screen and (max-width: 768px){
    .container-fluid{
      width: 100%;
      padding-top: 5pc;
      height: 400px;
    }

    .container{
      display: inline-block;
      justify-content: center;
    }

    .info{
      width: 100%;
      font-size: 26px;
      display: flex;
      justify-content: center;
      /*border:1px solid red;*/
    }
    .btn_section{
      width: 100%;
      margin-top: 3pc;
      /*border:1px solid blue;*/
      display: flex;
      justify-content: center;
    }
  }
  @media screen and (max-width: 992px){

  }

</style>
