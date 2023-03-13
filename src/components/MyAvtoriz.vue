<template>
    <div class="avt" v-if="show">
        <div class="avt__content">
            <slot>
               <p class="startText" >Добро пожаловать в систему расписания</p>
                <div class="btns">
               <my-button style="width: 102x; height: 30px;margin:auto; border-radius: 15px;">Войти</my-button>
               <button class="button" @click="changeCard">Регистрация</button>
                 </div>
               <input type="text" id="e-mail" placeholder="e-mail">
               <input type="text" id="pass" placeholder="Пароль">
              <my-button style="width: 446px; margin-top: 40px; border-radius: 15px;" @click="postChanges">Войти</my-button>
            </slot>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            showReg: false
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

</style>