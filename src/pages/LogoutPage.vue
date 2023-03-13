<template>

  </template>
  
  <script>
  import axios from "axios";

  export default{
    methods:{
      async logout(){
        const headers = { 
            "Authorization": "Bearer " + String(localStorage.getItem("token"))
          };
            try{
                const response = await axios.post("http://185.46.8.41/api/auth/logout", {}, { headers });
                console.log(response);
                
                localStorage.setItem("token", "null");
                this.$router.push("/login");
            }catch(e){
                console.log(e);
            }
      },
    },
    beforeMount(){
      this.logout();
    }
  }
</script>
  
  <style scoped>
  
  </style>