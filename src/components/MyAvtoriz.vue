<template>
    <div class="avt">
        <div class="avt__content">
            <slot>
               <p class="startText" >Добро пожаловать в систему расписания</p>
                <div class="btns">
               <my-button style="width: 102x; height: 30px;margin:auto; border-radius: 15px;">Войти</my-button>
               <button class="button" @click="changeCard">Регистрация</button>
                 </div>
               <input v-model="user.email" type="text" id="e-mail" placeholder="e-mail">
               <input v-model="user.password" type="text" id="pass" placeholder="Пароль">
              <my-button style="width: 446px; margin-top: 40px; border-radius: 15px;" @click="login">Войти</my-button>
              <span v-if="incorrect">{{ errText }}</span>
            </slot>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data(){
        return{
            user: {
                email: '',
                password: '',
            },
            incorrect: false,
            errText: ''
        }
    },
    name: 'my-avtoriz',
    props: {
            show: {
                type: Boolean,
                default: false,
            }
        },
    methods:{
        changeCard(){
            this.$router.push('/reg');
        },
        async login(){
            try{
                const response = await axios.post("http://185.46.8.41/api/auth/login", {
                    "email": String(this.user.email),
                    "password": String(this.user.password)
                });
                localStorage.setItem("token", response.data.token);
                this.$router.push('/')
            }catch(e){
                this.incorrect = true;
                if(e.response.request.status == 422){
                    this.errText = "Некорректный email"
                }
                else if(e.response.request.status == 400){
                    this.errText = "Неправильный email или пароль"
                }
            }
            
        }
    }
}
</script>

<style scoped>
.avt {
    margin-top: 30px;
    display: table;
    position: relative;
}

.btns{
    margin-top: 50px;
    margin-bottom: 10px;
}
.avt__content {
    margin:auto;
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


input{
  margin-top: 10px;
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