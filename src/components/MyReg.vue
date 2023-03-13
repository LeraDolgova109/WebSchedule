<template>
    <div class="reg" v-if="show">
        <div class="reg__content">
            <slot>
                <p class="startText" >Добро пожаловать в систему расписания</p>
               <div class="btns">
               <button class="button" @click="changeCard">Войти</button>
               <my-button style="width: 136px; height: 30px; margin-left: 30px; border-radius: 15px;" >Регистрация</my-button>
                </div>
                <input v-model="user.name" type="text" id="text" placeholder="Имя">
               <input v-model="user.email" type="text" id="e-mail" placeholder="e-mail">
               <input v-model="user.password" type="text" id="pass" placeholder="Пароль">
               <div style="margin-left: 75px;">
                <my-select
                    v-model="selectedGroup"
                    :options="optionsGroup"
                    :name="group"
                />
                </div>
                <my-button style="margin-top: 10px; width: 446px; border-radius: 15px;" @click="reg">Зарегистрироваться</my-button>
                <span v-if="sent">{{ spanText }}</span>  
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
        user: {
          name: '',
          email: '',
          password: '',
        },
        selectedGroup: '',
        optionsGroup: [],
        group: "Группа",
        spanText: 'Успешно зарегестрирован',
        sent: false
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
      changeCard(){
            this.$router.push('/login');
        },
      async reg(){
        let group_id = '';
        for (let i=0; i < this.optionsGroup.length; i++){
          if (this.optionsGroup[i].name == this.selectedGroup){
            group_id = this.optionsGroup[i].id;
            break;
          }
        }
        
        if (this.user.email == '' != this.user.name == '' || this.user.password == '' || group_id == ''){
          this.sent = true;
          this.spanText = "Каждое поле должно быть заполнено"
          return;
        }
          try{
              const response = await axios.post("http://185.46.8.41/api/auth/register", {
                    "name": this.user.name,
                    "email": this.user.email,
                    "password": this.user.password,
                    "group_id": group_id
              });
              localStorage.setItem("token", response.data.token);
              this.sent = true;
              this.spanText = "Успешно зарегестрирован";
          }catch(e){
              this.sent = true;
              console.log(e);
              if(e.response.request.status == 422){
                  this.spanText = "Некорректный email либо email уже занят"
              }
          }
      }
    },
    beforeMount(){
        this.get_groups();
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

span{
    margin-top: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    display: table; 
    margin: 0 auto;
    color: #Ffff; 
  }
span:hover{
  color:#F1E9E9; 
  opacity: 0.8;
}

</style>