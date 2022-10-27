<template>
    <div class="container">
      <h1>Projects</h1>
      <div class="projects_content ">
        <div class="left_side col-md-3">
          <ul class="category">
            <li class="active">All</li>
            <li>Commercial</li>
            <li>Residential</li>
            <li>Other</li>
          </ul>
        </div>
        <div class="right_side col-md-9">
          <div class="row carousel">
            <div class="card col-sm-4 col-md-6">
              <div class="card-content">
                <img src="../../assets/car1img.png" alt="img not found">
                <div class="info_section">
                  <p class="title">Wildstone Infra Hotel</p>
                  <h6>2715 Ash Dr. San Jose, South Dakota</h6>
                </div>
              </div>
            </div>
            <div class="card col-sm-4 col-md-6">
              <div class="card-content">
                <img src="../../assets/project2.png" alt="img not found">
                <div class="info_section">
                  <p class="title">Wish Stone Building</p>
                  <h6>2972 Westheimer Rd. Santa Ana, Illinois </h6>
                </div>
              </div>
            </div>
            <div class="card col-sm-4 col-md-6">
              <div class="card-content">
                <img src="../../assets/projects3.png" alt="img not found">
                <div class="info_section">
                  <p class="title">Mr. Parkinston’s House</p>
                  <h6>3517 W. Gray St. Utica, Pennsylvania</h6>
                </div>
              </div>
            </div>
            <div class="card col-sm-4 col-md-6">
              <div class="card-content">
                <img src="../../assets/projects4.png" alt="img not found">
                <div class="info_section">
                  <p class="title">Oregano Height</p>
                  <h6>2464 Royal Ln. Mesa, New Jersey</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "ProjectsPage",
  data(){
    return{
      methods: {

      }
    }
  }
}


</script>

<style scoped>
    .container{
      margin-top: 5vw;
    }
    .left_side{
      /*border: 1px solid red;*/
    }
    .right_side{
      /*border: 1px solid blue*/
    }
    .projects_content{
      display: flex;
      margin-top: 2vw;

    }
    ul{
      list-style-type: "| ";
    }
    li{
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color:  #C2C7D6;
    }
    .active{
      color: #2947A9;
    }

    .card {
      margin: 10px 0;
      border: transparent;
    }
    .card-content {
      background: #2947A9;
      font-size: 36px;
      height: 250px;
      color: #ffffff;
      cursor: pointer;
    }
    .card-content > img{
      width: 100%;
      height: 70%;
    }
    .info_section{
      width: 90%;
      margin: 0 auto;
      height: 30%;

    }
    .title{
      margin-top: 10px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
    }

    @media screen and (min-width: 468px) {
      .container{
        width: 100%;
      }
      .projects_content{
        display: inline-block;
      }
    }
    @media screen and (max-width: 768px) {
      .container{
        width: 100%;
      }
      .projects_content{
        display: inline-block;
      }
    }
    @media screen and (min-width: 992px) {
      .container{
        width: 100%;
      }
      .projects_content{
        display: flex;
      }

    }

</style>