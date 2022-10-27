<template>
  <div class="cardList">
    <h1 class="title">Our Reputation</h1>
    <div class="container">
      <div v-for="card in cardList"  :key="card.id" class="card_item">
        <img :src="imgPath(card.img)" alt="img not found">
        <p class='title'>{{card.title}}</p>
        <p class='desc'>{{card.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReaSons",
  data(){
      return{
        cardList: [
          {
            id: 1,
            img:'Vector.svg',
            title:'Best Services',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, voluptatum?'
          },
          {
            id: 2,
            img: 'Vector2.png',
            title: 'Best Teams',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, voluptatum?'
          },
          {
            id: 3,
            img:'Vector2.png',
            title:'Best Designs',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, voluptatum?'
          },

        ]
      }
  },
  methods: {
    imgPath(imgName) {
      return require(`../assets/${imgName}`);
    }
  }

}
</script>

<style scoped>
  .title{
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    margin: 3%;
    color: #292E3D
  }
  .container{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5%;
  }
  .card_item{
    display: flex;
    margin: 0 20px;
    padding: 20px 20px 40px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    border: 1.4px solid #E0E3EB;
    border-radius: 5px;
    cursor: pointer;
  }

  @media screen and (max-width: 468px) {
    .cardList{
      margin: 5pc 0 5pc 0;
    }

    .container{
      flex-direction: column;
    }

    .card_item{
      width: 90%;
      margin: 0 auto;
      margin-top: 10vw;
    }

  }

  @media screen and (max-width: 792px){
    .cardList{
      margin-top: 4pc;
      margin-bottom: 4pc;
    }

    .container{
      flex-direction: column;
    }
    .card_item{
      width: 90%;
      margin: 10vw 0vw 0vw 5vw
    }
  }

  @media screen and (max-width: 992px) {
    .container{
      display: flex;
    }
  }


</style>