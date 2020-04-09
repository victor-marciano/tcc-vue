<template>
  <div id="app">   
    <Sidebar></Sidebar>   
    <Navbar></Navbar>
    <Content></Content> 
    <Footer></Footer>  
  </div>
  
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    Content,
    Footer    
  }
}
</script>

