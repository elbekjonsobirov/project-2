<template >
  <div class="app">
    <Navbar />
    <RouterView />
    
  </div>
</template>
<script>

import Navbar from './Navbar/Navbar.vue';
import { RouterView } from 'vue-router';
export default {
    components: { Navbar, RouterView,  }
}
</script>
<style scoped>
 .app{
    width:100%;
    height: auto;
    margin: 0 auto;
    animation-name: app;
    animation-duration: 1s;
    /* border: 2px solid black; */
  }
  
  
</style>