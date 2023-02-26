<template>
  <navbar></navbar>
  <div class="app"> 
    <router-view></router-view>
    <my-select
      v-model="selected"
      :option="sortOptions"
    />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
  export default{
    components: {
      Navbar
    },
    data() {
      return {
        selected: '',
        sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
      }
    }
  }
</script>


<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
  height: 1024px;
  background-color: #0D053B;
}

</style>
