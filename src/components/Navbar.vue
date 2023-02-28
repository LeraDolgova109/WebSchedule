<template>
    <div class="navbar">
        <div class="navbar__btns" style="margin-left: 115px" v-if="this.$route.path === '/'">
            <button class="selected-button" @click="$router.push('/');">
                Главная
            </button>
            <button class="button" style="margin-left: 120px" @click="$router.push('/schedule');">
                Расписание
            </button>
        </div>
        <div class="navbar__btns" style="margin-left: 115px" v-else>
            <button class="button" @click="$router.push('/');">
                Главная
            </button>
            <button class="selected-button" style="margin-left: 120px" @click="$router.push('/schedule');">
                Расписание
            </button>
        </div>
        <div >
            
            
        </div>
    </div>
</template>

<script>
export default{
    
}
</script>

<style>

.navbar {
    height: 80px;
    display: flex;
    background-color: #0D053B;
    box-shadow: 2px 2px 25px #3F3578;;
    align-items: center;
    padding: 0 15px;
    white-space: nowrap;
    position: relative;
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
    border-color: none;
    color: #3B335E;
}

</style>