<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
      <div class="dialog__content" @click.stop>
        <my-casselect class="select-name"
          v-model="selectedClassname"
          :options="optionsClassname"
          :name="class"
        />
        <div class="row">
          <img class="icon" src="@/assets/person.svg" alt="кк"/> 
          <my-casselect class="select"
            v-model="selectedTeacher"
            :options="optionsTeacher"
            :name="teacher"
          />
        </div>
        <div class="row">
          <img class="icon" src="@/assets/location.svg" alt="кк"/>      
          <my-casselect class="select"
            v-model="selectedClassroom"
            :options="optionsClassRoom"
            :name="classroom"
          />
        </div>
        <div class="row">
          <img class="icon" src="@/assets/period.svg" alt="кк"/> 
          <my-casselect class="select"
            v-model="selectedPeriod"
            :options="optionsPeriod"
            :name="period"
          />
        </div>
        <div class="row">
          <img class="icon" src="@/assets/clock.svg" alt="кк"/>
          <my-multselect class="select"
            v-model="selectedGroup"
            :options="optionsGroup"
            :name="group"
          />
          </div>
        <my-button style="width: 500px; margin-top: 80px;" @click="postChanges">Сохранить</my-button>
        <span v-if="incorrect">{{ errText }}</span>
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
        selectedPeriod: '',
        class: 'Название предмета',
        group: "Группа",
        teacher: "Преподаватель",
        classroom: "Аудитория",
        period: 'Период',
        optionsPeriod: [
          {id: 0, name: "Единожды"},
          {id: 1, name: "На месяц"},
          {id: 2, name: "На 2 месяца"}
        ],
        incorrect: false,
        errText: "Все поля должны быть выбраны",
      }
    },
    props: {
      idBlock:{
        type: String
      },
      mondayDate:{
        type: Date
      },
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
      datePeriod(){
        let period = 0;
        let date_start = new Date(this.mondayDate.getFullYear(), this.mondayDate.getMonth(), this.mondayDate.getDate() + 1);
        let date_end;
        for (let i=0; i < this.optionsPeriod.length; i++){
            if (this.optionsPeriod[i].name == this.selectedPeriod){
              period = this.optionsPeriod[i].id;
              break;
            }
          }
        switch(period){
          case 0:
            date_end = new Date(date_start.getFullYear(), date_start.getMonth(), date_start.getDate() + 5);
            break;
          case 1:
            date_end = new Date(date_start.getFullYear(), date_start.getMonth(), date_start.getDate() + 31);
            break;
          case 2:
            date_end = new Date(date_start.getFullYear(), date_start.getMonth(), date_start.getDate() + 60);
            break;
        }
        let str_start  = date_start.toISOString().substring(0, 10);
        let str_end = date_end.toISOString().substring(0, 10);
        return {str_start, str_end}
      },
      async postChanges(){
        if (this.selectedClassname == '' || this.selectedGroup == [] || this.selectedTeacher == '' || this.selectedClassroom == '' || this.selectedPeriod == ''){
            this.incorrect = true;
        }
        else{
          this.incorrect = false;
          let timeslot_id = this.idBlock;
          let subject_id, teacher_id, classroom_id;
          let groups_id = [];
          let date_start = this.datePeriod().str_start;
          let date_end = this.datePeriod().str_end;
          let period = "1";
          for (let i=0; i < this.optionsClassname.length; i++){
            if (this.optionsClassname[i].name == this.selectedClassname){
              subject_id = this.optionsClassname[i].id;
              break;
            }
          }
          for (let i=0; i < this.optionsTeacher.length; i++){
            if (this.optionsTeacher[i].name == this.selectedTeacher){
              teacher_id = this.optionsTeacher[i].id;
              break;
            }
          }
          for (let i=0; i < this.optionsClassRoom.length; i++){
            if (this.optionsClassRoom[i].name == this.selectedClassroom){
              classroom_id = this.optionsClassRoom[i].id;
              break;
            }
          }
          for (let i=0; i < this.optionsGroup.length; i++){
            if (this.optionsGroup[i].name == this.selectedGroup){
              groups_id.push(this.optionsGroup[i].id);
            }
          }
          
          const headers = { 
            "Authorization": "Bearer " + localStorage.getItem("token")
          };
          const newClass = {
                  "subject_id" : subject_id,
                  "teacher_id" : teacher_id,
                  "classroom_id" : classroom_id,
                  "timeslot_id" : timeslot_id,
                  "date_start" : date_start,
                  "date_end" : date_end,
                  "period" : period,
                  "groups_id" : groups_id
              };
          try{
            const response = await axios.post("http://185.46.8.41/api/class", newClass, { headers });
            location.reload();
          } catch (e){
            this.incorrect = true;
            this.errText = 'Нет прав для добавления пары';
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
    min-width: 540px;
    min-height: 490px;
    padding: 20px;
    justify-content: center;
    flex-direction: column;
    background: #F1E9E9;
    opacity: 1;
    border-radius: 15px;
  }

  .select{
    width: 420px;
    height: 40px;
    margin-left: 20px;
  }

  .selectm {
    position: relative;
    margin-bottom: 1rem;
    width: 420px;
    height: 40px;
    margin-top: 20px;
    border: none; 
    outline: none;
}

.selectm select {
    display: block;
    width: 100%;
    padding: .75rem 2.5rem .75rem 1rem;
    background: none;
    border: none; 
    border-radius: 12px;
    -webkit-appearance: none;
    appearance: none;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #0D053B;
}

  .select-name{
    width: 500px; 
    height: 40px; 
    font-size: 25px; 
    line-height: 27px;
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

  .row{
    display: flex;
    justify-content: left;
  }

  .icon{
    height: 40px;
    width: 40px;
    position: relative;
    margin-top: 20px;
    margin-left: 10px;
  }
  </style>