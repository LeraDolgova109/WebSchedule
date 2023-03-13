<template>
    <div class="userPage">
      <div class="filter-block">
          <my-reg :show=showReg></my-reg>
      </div>
    </div>
  </template>
  
  <script>
  import MyReg from "@/components/MyReg";

  export default{
    data(){
      return{
        showReg: true,
      }
    },
    components: {
        MyReg
      }
    }
  </script>
  
  <style scoped>
  
  .userPage{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
  
    color: #FFFFFF;
  }
  </style>