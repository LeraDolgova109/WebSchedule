<template>
    <div class="navbar">
        <div class="navbar__btns" style="margin-left: 115px">
            <button @click="$router.push('/')">Главная</button>
            <button style="margin-left: 120px" @click="$router.push('/schedule')">Расписание</button>
        </div>
    </div>
</template>

<script>

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



</style>