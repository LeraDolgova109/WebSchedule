<template>
    <div class="block">
        <my-card 
            name="data" 
            v-for="time_block in time_blocks" 
            :time_block="time_block"
        />
    </div>
 </template>
 
 <script>
 //v-for="time_block in time_blocks"
  export default {
    name: 'my-block',
    props:{
        time_blocks:{
            type: Array,
            default: () => []
        }
    },
    methods:{
        
    }
    // methods: {
    //     addBlock() {
    //         this.inputs.push(
    //             {
    //             one: '',
    //             two: ''
    //         })
    //     },
    //     deleteRow(index) {
    //     this.inputs.splice(index,1)
    //     }
    // }
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