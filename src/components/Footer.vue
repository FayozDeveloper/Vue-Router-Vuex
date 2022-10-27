<template>
  <div class='container-fluid'>
    <div class="container">
      TheBox Company © 2022. All Rights Reserved
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer_section"
}
</script>

<style scoped>
  .container-fluid{
    background-color: #2947A9;
  }
  .container{
    height: 50px;
    color: #F6F8F7;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 468px) {
    .container{
      font-size: 13px;
    }
  }

</style>