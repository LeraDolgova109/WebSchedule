<template>
    <div class="home">
      <div class="filter-block">
        <h1>Задать фильтрацию</h1>
        <my-select
          v-model="selectedGroup"
          :options="optionsGroup"
          :name="group"
        />
        <my-select
          v-model="selectedTeacher"
          :options="optionsTeacher"
          :name="teacher"
        />
        <my-select
          v-model="selectedClassroom"
          :options="optionsClassRoom"
          :name="classroom"
        />
        <my-button @click="save_param" style="width: 446px; display: table; margin: 0 auto; margin-top: 40px;">Сохранить</my-button>
      </div>
    </div>
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
  
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .filter-block{
    width: 630px;
    height: 420px;
    margin-top: 30px;
    padding: 50px;
    background: rgba(90, 62, 202, 0.6);
    border-radius: 15px;
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