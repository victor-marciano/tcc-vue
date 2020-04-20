<template>
  <div id="app">   
    <Sidebar></Sidebar>   
    <Navbar></Navbar>
    <Content></Content> 
    <Footer></Footer>
    <auth-modal></auth-modal>  
  </div>
  
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
import AuthModal from './components/auth/AuthModal.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    Content,
    Footer,
    AuthModal    
  },
  data() {
    return {
      authenticated: false
    }
  },
}
</script>

