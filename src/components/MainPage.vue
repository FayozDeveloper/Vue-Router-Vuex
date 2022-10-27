<template>
  <div class="container-fluid">
  <div class="Hero">
    <div class="container">
      <div class="left_Side d-flex align-items-center">
        <p class="topic">Building things is our mission.</p>
      </div>
      <div class="right_Side">
      </div>
    </div>
  </div>
  <ReaSons/>
  <About_Page/>
  <ServicesComponent/>
  <Stats_/>
  <Ads_/>
  <ProjectsPage/>
  <Fom_/>
  <Bottom_section/>
  <Footer_section/>
  </div>
</template>

<script>

import ReaSons from "@/components/Reasons";
import About_Page from "@/components/About";
import ServicesComponent from "@/components/Services";
import Stats_ from "@/components/Stats";
import Ads_ from "@/components/Ads";
import ProjectsPage from "@/components/ProjectsPage";
import Fom_ from "@/components/Fom";
import Bottom_section from "@/components/Bottom";
import Footer_section from "@/components/Footer";
export default {
  name: "MainPage",
  components: {Footer_section, Bottom_section, Fom_, ProjectsPage, Ads_, Stats_, ServicesComponent, About_Page, ReaSons},
}
</script>

<style scoped>
  .container{
    height: 646px;
    width: 1440px;
    display: flex;
    left: 0px;
    top: 80px;
  }
  .topic{
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 84px;
    font-family: 'Work Sans';
    color: #292E3D;
  }
  .left_Side{
    width: 50%;
  }
  .right_Side{
    width: 50%;
    position: relative;
  }
  .Hero{
    width: 100%;
    height: 646px;
    background-image: url("../assets/Heroimg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media screen and (max-width: 480px ){
      .container{
        width: 100%;
        display: inline;
      }
      .left_Side{
        width: 100%;
        height: 50%;
        padding: 20px;
        margin-top: 3pc;
      }
      .right_Side{
        width: 100%;
        height: 50%;
      }
      .topic{
        font-size: 44px;
      }
  }

  @media screen and (max-width: 768px) {
    .container{
      width: 100%;
      display: inline;
    }
    .left_Side{
      width: 100%;
      height: 80%;
      padding: 20px;
    }
    .right_Side{
      width: 100%;
      height: 50%;
      display: none;
    }
    .topic{
      font-size: 46px;
    }
  }

  @media screen and (min-width: 992px){
    .container{
      width: 100%;
      display: flex;
    }
    .left_Side{
      width: 100%;
      padding: 20px;
    }
    .right_Side{
      width: 100%;
    }
    .topic{
      font-size: 56px;
    }
  }


</style>