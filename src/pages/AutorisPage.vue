<template>
    <div class="userPage">
      <div class="filter-block">
          <my-avtoriz :show=showAvtoriz></my-avtoriz>
      </div>
    </div>
  </template>
  
  <script>
  import MyAvtoriz from "@/components/MyAvtoriz";

  export default{
    data(){
      return{
        showAvtoriz: true,
      }
    },
    components: {
        MyAvtoriz
      },
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