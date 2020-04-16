<template>  
  <section>
    <Heading section="Introdução"></Heading>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <CardKcal icon="kcal" :qty="3000" :max="3100" unit="kcal"></CardKcal>
        </div>
        <div class="col-md-4">
          <CardKcal icon="shake" :qty="1000" :max="2000" unit="ml"></CardKcal>
        </div>
        <div class="col-md-4">
          <CardKcal icon="training" :qty="1" :max="1" unit="times"></CardKcal>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import Heading from '../components/HeadingContent.vue';
import CardKcal from '../components/home/CardKcal.vue';

export default {
  name: 'Home',
  components: {
    Heading,
    CardKcal
  }  
}
</script>

<style lang="scss" scoped>
  .card {
      -webkit-box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
      box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
      border: 1px solid whitesmoke;    
  }   
</style>