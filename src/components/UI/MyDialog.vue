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

  export default {
    name: 'my-dialog',
    data(){
      return{
        selectedClassname: "",
        selectedGroup: '',
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
      postChanges: function(){
        if (this.selectedClassname == 'this.' || this.selectedGroup == '' || this.selectedTeacher == '' || this.selectedClassroom == ''){
            this.incorrect = true;
        }
        else{
          this.incorrect = false;
          this.show = false;
        }
      }
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