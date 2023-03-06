<template>
   <div class="card">
      <div class="info">
         <span>{{ lessonName }}</span>
         <span>{{ teacherName }}</span>
         <span>{{ classRoom }}</span>
         <span>{{ groupName }}</span>
      </div>
   </div>

</template>

<script>
 export default {
   name: 'my-card',
   data(){
      return{

      }
   },
   props: {
      lessonName:{
         type: String
      },
      teacherName:{
         type: String
      },
      classRoom:{
         type: String
      },
      groupName:{
         type: String
      }
    },
 }
</script>

<style scoped>
.card{
   width: 185px;
   height: 80px;
   margin: 3px;
   background: #F1E9E9;
   border-radius: 5px;
   justify-content: center;
   align-items: center;

   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 15px;
   line-height: 18px;
}

.card:hover{
   background: #cdc5c5;
}
span{
   display: block;
   white-space: pre;
   color: #0D053B;
}
.info{
   padding: 5px;
}
</style>