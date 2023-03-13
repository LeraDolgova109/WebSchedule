<template>
    <div class="avt" v-if="show">
        <div class="avt__content">
            <slot>
               <span class="startText" >Добро пожаловать в систему расписания {{ msg }}</span>

               <my-button style="width: 102x; height: 30px;margin:auto; border-radius: 15px;" @click="postChanges">Войти</my-button>
               <my-button style= "margin-left: 399px; background: none; margin:auto; color: #F1E9E9; " @click="postChanges">Регистрация</my-button>
               <input type="text" id="e-mail" placeholder="e-mail">
               <input type="text" id="pass" placeholder="Пароль">
              <my-button style="width: 446px; margin-left: 131px ; margin-bottom: 52px ;border-radius: 15px;" @click="postChanges">Войти</my-button>
                    <!-- <my-multselect style="width: 446px; margin-top:300px;"></my-multselect> -->
            </slot>
        </div>
    </div>
</template>


<script>
export default {
  name: 'my-avtoriz',
  props: {
        show: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style scoped>
.avt {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    z-index: 1;
}

.avt__content {
    margin:auto;
    width: 705px;
    height: 486px;
    left: 353px;
    top: 21px;
    justify-content: center;
    flex-direction: column;
    background: #5A3ECA;
    opacity: 1;
    border-radius: 15px;
    
   }

.selecttt{
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

input[type=text], .selecttt {
  margin:5px 5px 25px 90px;
  padding-left: 0%; 
  background:#F1E9E9; 
  opacity: 0.8;
  width: 534px;
  height: 47px;
  font-size: 20px;
  border: none; 
  border-radius: 12px;
}

.startText{
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    margin-top: 48px;
    margin-left: 118px;
    margin-right: 118px;
    font-size: 32px;
    color:#Ffff; 
}

</style>