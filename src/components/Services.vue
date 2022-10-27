<template>
  <div class="container-fluid">
  <div class="container">
    <h1 class="title">Services</h1>
    <div class="grid">
      <div class="card"  :class="{active : card.isActive }" v-for="card in serviceList" :key="card.id">
        <div class="info">
          <img :src="imgPath(card.img)" alt="img not found">
          <div class="title">{{card.title}}</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "ServicesComponent",
  data(){
     return {
       serviceList: [
         {id:1, img:'icon.png', title:'Construction', isActive: false},
         {id:1, img:'icon1.png', title:'Renovation', isActive: true },
         {id:1, img:'icon2.png', title:'Consultation', isActive: false},
         {id:1, img:'icon3.png', title:'Repair Services', isActive: true},
         {id:1, img:'icon4.png', title:'Architecture', isActive: false},
         {id:1, img:'icon5.png', title:'Electric', isActive: true},
       ]
     }
  },
  methods:{
    imgPath(imgName){
      return  require(`../assets/${imgName}`)
    }
  }
}
</script>

<style scoped>
    .container{
      padding-top: 1vw;
      background-color:#F6F8F7;
    }
    .container-fluid{
      background-color:#F6F8F7;
    }
    .title{
      margin: 5%;
      font-weight: bold;
    }

    .grid{
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 3vw;
      justify-items: center;
    }

    .card{
      width: 271px;
      height: 181px;
      font-size: 5vw;
      padding: .5em;
      box-shadow: 0px 0px 37px -2px rgba(17, 24, 39, 0.05);
      border-radius: 4px;
      transition: 120ms ease;
      margin-bottom: 5vw;
      text-align: center;
    }

    .active{
      background-color: #3559C7;
      color: #E0E3EB;
    }

    .info{
      font-size: 20px;
    }

    @media screen and (max-width: 468px) {
      .container{
        width: 100%;
        padding-top: 3pc;
      }
      .card{
        width: 100%;
      }
      .grid{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-auto-rows: 100px;
      }
    }
    @media screen and (max-width: 991px) {
      .container{
        width: 100%;
        padding-top: 2pc;
      }
      .card{
        width: 100%;
        justify-content: center;
      }
      .info{
        font-size: 16px;
      }
      .grid{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 200px;
      }
    }



</style>