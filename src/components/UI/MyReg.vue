<template>
    <div class="reg" v-if="show">
        <div class="reg__content">
            <slot>
        
                <!-- <input class="name" type="text" id="subName" placeholder="Название предмета">
               -->
               <!-- <div v-bind:id="dynamicId"></div> -->
               <span class="startText" >Добро пожаловать в систему расписания {{ msg }}</span>

               <my-button style= "margin-left: 245px; background: none; color: #F1E9E9; " @click="postChanges">Войти</my-button>
               <my-button style="width: 136px; height: 30px;margin-left: 387px; border-radius: 15px;" @click="postChanges">Регистрация</my-button>
            
               <input type="text" id="e-mail" placeholder="e-mail">
               <input type="text" id="pass" placeholder="Пароль">
               <div class="selecttt">
                                <label for="InputSort" class="form-label fw-weight-bold "></label>
                                <select class="form-select" id="sort">
                                    <option value="1">Номер группы</option>
                                    <option value="0"></option>
                                    <option value="2"></option>
                                </select>
                </div>
                <div class="selecttt">
                                <label for="InputSort" class="form-label fw-weight-bold "></label>
                                <select class="form-select" id="sort">
                                    <option value="1">ФИО преподавателя</option>
                                    <option value="0"></option>
                                    <option value="2"></option>
                                </select>
                </div>
              <my-button style="width: 446px; margin-left: 131px; border-radius: 15px;" @click="postChanges">Зарегистрироваться</my-button>
                    <!-- <my-multselect style="width: 446px; margin-top:300px;"></my-multselect> -->
            </slot>
        </div>
    </div>
</template>


<script>
export default {
  name: 'my-reg',
  props: {
        show: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style scoped>
.reg {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    z-index: 1;
}

.reg__content {
    margin:auto;
    width: 705px;
    height: 574px;
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