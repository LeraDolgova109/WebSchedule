<template>
    <div class="navbar">
        <div class="navbar__btns" style="margin-left: 115px" v-if="this.$route.path === '/'">
            <div class="left">
            <button class="selected-button" @click="$router.push('/');">
                Главная
            </button>
            <button class="button" style="margin-left: 120px" @click="$router.push('/schedule');">
                Расписание
            </button>
            </div>
            <div  class="right">
            <button class="button" style="margin-right: 115px" @click="changeOption()">
                <span>{{ buttonText }}</span>
            </button>
        </div>
        </div>
        <div class="navbar__btns" style="margin-left: 115px" v-else-if="this.$route.path === '/schedule'">
            <div class="left">
            <button class="button" @click="$router.push('/');">
                Главная
            </button>
            <button class="selected-button" style="margin-left: 120px" @click="$router.push('/schedule');">
                Расписание
            </button>
            </div>
            <div class="right">
            <button class="button" style="margin-right: 115px" @click="changeOption()">
                <span>{{ buttonText }}</span>
            </button>
            </div>
        </div>
        <div class="navbar__btns" style="margin-left: 115px" v-else>
            <div class="left"> 
            <button class="button" @click="$router.push('/');">
                Главная
            </button>
            <button class="button" style="margin-left: 120px" @click="$router.push('/schedule');">
                Расписание
            </button>
        </div>
        <div class="right">
            <button class="selected-button" style="margin-right: 115px"  @click="changeOption()">
                <span>{{ buttonText }}</span>
            </button>
        </div>
    <div >
    </div>
    </div>
</div>
</template>

<script>

export default{
    dsts(){
        return{
            buttonText: "Вход",
        }
    },
    methods:{
        checkLogin(){
            if(localStorage.getItem('token') == "null" || localStorage.getItem('token') == null){
                this.buttonText = "Вход";
            }
            else{
                this.buttonText = "Выход";
            }
        },
        changeOption(){
            if(localStorage.getItem('token') == "null" || localStorage.getItem('token') == null){
                this.buttonText = "Вход";
                this.$router.push('/login');
            }
            else{
                this.buttonText = "Выход";
                this.$router.push('/logout');
            }
        }
    },
    beforeMount(){
        this.checkLogin();
    },
}
</script>

<style>

.navbar {
    width: 100%;
    height: 80px;
    display: flex;
    background-color: #0D053B;
    box-shadow: 2px 2px 25px #3F3578;;
    align-items: center;
    position: relative;
}

.navbar__btns{
    display:table;
    width: 100%;
}
.left{
    display: table-cell;
    text-align: left;
}
.right{
    display: table-cell;
    text-align: right;
}
.button{
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

.selected-button {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    width: 124px;
    height: 35px;
    left: 353px;
    top: 21px;

    background: #BAF69F;
    border-radius: 5px;
    border: none;
    color: #0D053B;
}

.selected-button:hover{
    background: #3B335E;
    border-radius: 5px;
    border: none;
    color:  rgb(255, 255, 255);
}

</style>