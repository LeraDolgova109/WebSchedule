<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
      <div class="dialog__content" @click.stop>
        <h1>Новая пара</h1>
        <my-select class="select"
          v-model="selectedClassname"
          :options="optionsClassname"
          :name="class"
        />
        <my-select class="select"
          v-model="selectedTeacher"
          :options="optionsTeacher"
          :name="teacher"
        />
        <my-select class="select"
          v-model="selectedClassroom"
          :options="optionsClassRoom"
          :name="classroom"
        />
        <my-multselect class="select"
          v-model="selectedGroup"
          :options="optionsGroup"
          :name="group"
        />
        <my-button style="width: 500px; margin-top: 75px;" @click="postChanges">Сохранить</my-button>
        <span v-if="incorrect">Все поля должны быть выбраны</span>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'my-dialog',
    data(){
      return{
        selectedClassname: "",
        selectedGroup: [],
        selectedTeacher: '',
        selectedClassroom: '',
        class: 'Название предмета',
        group: "Группа",
        teacher: "Преподаватель",
        classroom: "Аудитория",
        incorrect: false,
      }
    },
    props: {
      show: {
        type: Boolean,
        default: false
      },
      optionsClassname:{
            type: Array,
            default: () => []
        },
        optionsGroup:{
            type: Array,
            default: () => []
        },
        optionsTeacher:{
            type: Array,
            default: () => []
        },
        optionsClassRoom:{
            type: Array,
            default: () => []
        },
    },
    methods: {
      hideDialog() {
        this.$emit('update:show', false)
      },
      async postChanges(){
        if (this.selectedClassname == 'this.' || this.selectedGroup == '' || this.selectedTeacher == '' || this.selectedClassroom == ''){
            this.incorrect = true;
        }
        else{
          this.incorrect = false;

          try{
            // const headers = { 
            //   "Access-Control-Allow-Origin": "*",
            //   "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            //   "Access-Control-Allow-Headers": "X-Requested-With"
            // };
            // const pass = {
            //     "email":"admin@gmail.com",
            //     "password":"admin"
            // }
            
            // const response = await axios.get("http://185.46.8.41/sanctum/csrf-cookie");
            // console.log(response);

            // const response1 = await axios.post("http://185.46.8.41/login", pass, headers);
            // console.log(response1);
            
            // const newClass = {
            //     "subject_id" : "3",
            //     "teacher_id" : "3",
            //     "classroom_id" : "2",
            //     "timeslot_id" : "8",
            //     "date_start" : "2023-03-01",
            //     "date_end" : "2023-03-31",
            //     "period" : "1",
            //     "groups_id" : [
            //         9,10
            //     ]
            // };
            // const response = await axios.post("http://185.46.8.41/api/class", newClass, {headers});
          } catch (e){
            console.log(e);
        };
        }
      },
    },
  }
  </script>
  
  <style scoped>
  .dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    z-index: 1;
  }
  
  .dialog__content{
    margin: auto;
    border-radius: 12px;
    width: 540px;
    height: 490px;
    padding: 20px;
    justify-content: center;
    flex-direction: column;
    background: #F1E9E9;
    opacity: 1;
    border-radius: 5px;
  }

  .select{
    width: 500px;
    height: 47px;
  }

  h1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    font-weight: bold;

    color: #3B335E;
  }
  h1:hover{
    color: #0D053B;
  }

  span{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: table; 
    margin: 0 auto;
    margin-top: 3px;
    color: #0D053B;
  }
  span:hover{
    color: #3B335E;
  }
  </style>