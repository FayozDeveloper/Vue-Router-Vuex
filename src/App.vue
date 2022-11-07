<template>
  <div>
      <TestNavbar/>
      <router-view></router-view>
  </div>
</template>

<script>


import TestNavbar from "@/components/TestNavbar";
export default {
  name: 'App',
  components: {
    TestNavbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
