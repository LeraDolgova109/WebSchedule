<template>
    <div class="block" @click="showDialog">
        <my-dialog
            v-model:show="dialogVisible"
            :optionsClassname=optionsClassname
            :optionsGroup=optionsGroup
            :optionsTeacher=optionsTeacher
            :optionsClassRoom=optionsClassRoom
        ></my-dialog>
        <my-card 
            name="data" 
            v-for="time_block in time_blocks" 
            :time_block="time_block"
        />
    </div>
 </template>
 
 <script>
  export default {
    data(){
        return{
            dialogVisible: false,
        }
    },
    name: 'my-block',
    props:{
        time_blocks:{
            type: Array,
            default: () => []
        },
        optionsClassname:{
            type: Array,
            default: () => []
        },
        optionsGroup:{
            type: Array,
            default: () => []
        },
        optionsTeacher:{
            type: Array,
            default: () => []
        },
        optionsClassRoom:{
            type: Array,
            default: () => []
        },
    },
    methods:{
        showDialog: function(){
            this.dialogVisible = true;
        }
    }
}
 </script>
 
 <style scoped>
.block {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 15%;

  min-width: 192px;
  min-height: 115px;

  border: 1px solid #E1DFED;
}

.block:hover {
    background:  rgba(225, 223, 237, 0.5);
}
 </style>