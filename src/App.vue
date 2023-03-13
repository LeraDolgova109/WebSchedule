<template>
  <navbar></navbar>
  <div class="app"> 
    <router-view></router-view>
  </div>
  <!-- <my-reg :show="true"></my-reg> -->
  <my-avtoriz :show="true"></my-avtoriz>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
  export default{
    components: {
      Navbar
    },
  }
</script>


<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  height: 100%;
  min-height: 1024px;
  padding: 20px;
  background-color: #0D053B;
}

</style>
