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
import axios from 'axios';

export default {
  data() {
      return {
        selectedGroup: '',
        selectedTeacher: '',
        selectedClassroom: '',
        optionsGroup: [],
        optionsTeacher: [],
        optionsClassRoom: [],
        group: "Группа",
        teacher: "Преподаватель",
        classroom: "Аудитория"
      }
    },
    methods:{
      async get_groups(){
        try{
          const response = await axios.get("http://185.46.8.41/api/group");
          
          this.optionsGroup = response.data;
        } catch (e){
          console.log(e);
        };
      },
      async get_teachers(){
        try{
          const response = await axios.get("http://185.46.8.41/api/teacher");
          
          this.optionsTeacher = response.data;
        } catch (e){
          console.log(e);
        };
      },
      async get_classrooms(){
        try{
          const response = await axios.get("http://185.46.8.41/api/classroom");
          let dataClass = [];
          for (let i = 0; i<response.data.length; i++){
            let address = response.data[i].address;
            for (let j = 0; j<response.data[i].classrooms.length; j++){
              let newClass = response.data[i].classrooms[j];
              newClass.name = `Аудитория ${newClass.name}` + " " + address;
              dataClass.push(newClass);
            }
          }
          this.optionsClassRoom = dataClass;
        } catch (e){
          console.log(e);
        };
      },
      save_param: function(){
        for (let i=0; i < this.optionsGroup.length; i++){
          if (this.optionsGroup[i].name == this.selectedGroup){
            localStorage.setItem('selectedGroup', this.optionsGroup[i].id);
            break;
          }
          else {
            localStorage.setItem('selectedGroup', null);
          }
        }
        for (let i=0; i < this.optionsTeacher.length; i++){
          if (this.optionsTeacher[i].name == this.selectedTeacher){
            localStorage.setItem('selectedTeacher', this.optionsTeacher[i].id);
            break;
          }
          else {
            localStorage.setItem('selectedTeacher', null);
          }
        }
        for (let i=0; i < this.optionsClassRoom.length; i++){
          if (this.optionsClassRoom[i].name == this.selectedClassroom){
            localStorage.setItem('selectedClassroom', this.optionsClassRoom[i].id);
            break;
          }
          else {
            localStorage.setItem('selectedClassroom', null);
          }
        }
      }
  },
  beforeMount(){
    this.get_groups();
    this.get_teachers();
    this.get_classrooms();
 }
}
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