<template>
  <div class="home">
    <my-select
      v-model="selectedGroup"
      :options="options"
    />
    <my-button @click="save_param">Сохранить</my-button>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
      return {
        selectedGroup: '',
        options: [],
      }
    },
    methods:{
      async get_group(){
        try{
          const response = await axios.get("http://185.46.8.41/api/group");
          
          this.options = response.data;
        } catch (e){
          console.log(e);
        };
      },
      save_param: function(){
        for (let i=0; i < this.options.length; i++){
          if (this.options[i].name == this.selectedGroup){
            localStorage.setItem('selectedGroup', this.options[i].id);
          }
        }
      }
  },
  beforeMount(){
    this.get_group();
 }
}
</script>
