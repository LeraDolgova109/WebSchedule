<template>
    <div class="reg" v-if="show">
        <div class="reg__content">
            <slot>
                <p class="startText" >Добро пожаловать в систему расписания</p>
               <div class="btns">
               <button class="button" @click="changeCard">Войти</button>
               <my-button style="width: 136px; height: 30px; margin-left: 30px; border-radius: 15px;" >Регистрация</my-button>
                </div>
               <input type="text" id="e-mail" placeholder="e-mail">
               <input type="text" id="pass" placeholder="Пароль">
               <div style="margin-left: 75px;">
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
                </div>
                <my-button style="margin-top: 10px; width: 446px; border-radius: 15px;" @click="postChanges">Зарегистрироваться</my-button>
                </slot>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'my-reg',
  data(){
    return{
        selectedGroup: '',
        selectedTeacher: '',
        optionsGroup: [],
        optionsTeacher: [],
        group: "Группа",
        teacher: "Преподаватель",
    }
  },
  props: {
        show: {
            type: Boolean,
            default: false,
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
      changeCard(){
            this.$router.push('/login');
        }
    },
    beforeMount(){
        this.get_groups();
        this.get_teachers();
    }
}
</script>

<style scoped>
.reg {
    margin-top: 30px;
    display: table;
    position: relative;
}

.btns{
    margin-top: 20px;
    margin-bottom: 10px;
}
.reg__content {
    width: 705px;
    height: 486px;
    padding: 10px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    background: rgba(90, 62, 202, 0.6);;
    opacity: 1;
    border-radius: 15px;
}

.name[type=text] {
  background:#F1E9E9; 
  width: 80%;
  font-size: 22px;
  /* padding: 12px 0px 7px 20px; */
  margin: 46px 15px 10px 28px;
  box-sizing: border-box;
  border: none; 
  outline: none;
  border-bottom: 2px solid rgba(12, 4, 58, 0.8);
}

input{
  margin-top: 20px;
  background:#F1E9E9; 
  opacity: 0.8;
  width: 534px;
  height: 47px;
  font-size: 20px;
  border: none; 
  border-radius: 12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #0D053B;
}

.startText{
    margin-top: 10px;
    width: 400px;
    display: table; 
    margin: 0 auto;
    white-space: normal;
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-size: 32px;
    color:#Ffff; 
}

.button{
    margin-left: 40px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    
    border: none;
    background: none;
    color: rgba(255, 255, 255, 0.8);
}

.button:hover{
    color: rgb(255, 255, 255);
}

</style>