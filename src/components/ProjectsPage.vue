<template>
    <div class="container">
      <div>
      <h1>Projects</h1>
      <div class="projects_content ">
        <div class="left_side col-md-3">
          <ul class="category">
            <li v-for="category in AllCategories" :key="category.index" :class="{active : isActive === category}"  @click="onSelectCategory(category)" >
              {{ category }}
            </li>
          </ul>
        </div>
        <div class="right_side col-md-9">
          <div class="row carousel">
            <div v-for="project in filteredProds" :key="project.id" class="card col-sm-4 col-md-6">
              <div class="card-content">
                <img :src="project.img" alt="img not found">
                <div class="info_section">
                  <p class="title">{{ project.title }}</p>
                  <h6>{{ project.desc }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ProjectsPage",
  data() {
    return {
      selectedCategory: 'All',
      sortedProducts: [],
      AllCategories: [
        'All', 'Commercial', 'Residential', 'Other'
      ],
      isActive: 'All'
    }
  },

  methods: {
    ...mapActions(["fetchProjects"]),
    onSelectCategory(category) {
      this.selectedCategory = category;
      this.isActive = category;
      console.log(category)
    },
  },
  computed: {
    ...mapGetters(['allProjects']),
    filteredProds() {
      if (this.selectedCategory === 'All'){
        return this.allProjects.map((item) => item);
      }
      else {
        return this.allProjects.filter(x => x.category === this.selectedCategory);
      }
    }
  },
  created() {
    this.fetchProjects()
  },
}


</script>

<style scoped>
    .container{
      margin-top: 5vw;
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
      cursor: pointer;
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