<template>
    <div class="dialog" v-if="show">
        <div class="dialog__content">
            <slot>
                <!-- <span >Сообщение: {{ msg }}</span> -->
                
                <!-- <div><input v-model="message" placeholder="edit me">
                        <p>Message: {{ message }}</p> 
                    </div> -->
                <!-- <hr class="hr-line"> -->
                <input class="name" type="text" id="subName" placeholder="Название предмета">
              
                    <img class="icon" src="@/assets/person.svg" alt="кк"/> 
                    <input type="text" id="fio" placeholder="Иванов Иван Иванович">
               
                    <!-- <img class="icon" src="@/assets/clock.svg" alt="кк"/> 
                    <input type="text" id="time" placeholder=" 1 пара"> -->
                
                    <img class="icon" src="@/assets/period.svg" alt="кк"/> 
                    <div class="selecttt">
                                <label for="InputSort" class="form-label fw-weight-bold "></label>
                                <select class="form-select" id="sort">
                                    <option value="1">единожды</option>
                                    <option value="0">каждую неделю</option>
                                    <option value="2">каждый месяц</option>
                                  
                                </select>
                    </div>
              
                
                    <img class="icon" src="@/assets/location.svg" alt="кк"/>      
                    <input type="text" id="numberClass" placeholder="302 аудитория">
              

                <button class="btn_edit" type="submit">
                    <slot>Сохранить</slot>
                </button>
              
                    <!-- <div>{{ selected }}</div>
                    <select v-model="selected">
                        
                        <option disabled value="" >единожды</option>
                        <option value="0">каждую неделю</option>
                        <option value="1">каждый месяц</option>
                    </select> -->
            </slot>
        </div>
    </div>
</template>


<script>
export default {
  name: 'my-dialoge',
  props: {
        show: {
            type: Boolean,
            default: false,
        }
    }
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

.dialog__content {
    margin:auto;
    background: #F1E9E9;
    width: 376px;
    height: 380px;
    left: 353px;
    top: 21px;
    justify-content: center;
    flex-direction: column;
    background: #F1E9E9;
    opacity: 1;
    border-radius: 15px;
    
   }

.hr-line {
    margin-left: auto;
    margin-right: auto;
    margin-top:20%;
	padding: 28px;
	height: 0;
    width: 320px;
	border: none;
	border-top: 2px solid rgba(12, 4, 58, 0.8);
   
}

.icon{
    margin: 10px 0px 0px 28px;
}
.selectt{
    font-size: 20px;
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
  margin:0px 0px 0px 90px;
  padding-left: 0%; 
  background:#F1E9E9; 
  width: 276px;
  font-size: 16px;
  /* box-sizing: border-box; */
  border: none; 
  outline: none;
 
}
.btn_edit{
    margin:0 auto;
    display: block;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    font-size: 16px;
    width: 305px;
    height: 36px;
    background: #BAF69F;
    border-radius: 5px;
    border-color: none;
    color: #3B335E;
    /* align-items: center; */
}


</style>