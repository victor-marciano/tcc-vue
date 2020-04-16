<template>
  <section>
    <heading></heading>
    <div class="container-fluid">
      <transition name="show" enter-active-class="fadeInUp" appear>              
        <div class="card">
          <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item"><a class="nav-link active" href="#nav-imc" data-toggle="tab" role="tab">IMC</a></li>
              <li class="nav-item"><a class="nav-link" href="#nav-calorias" data-toggle="tab" role="tab">Kcal diárias</a></li>
              <li class="nav-item"><a class="nav-link" href="#nav-peso" data-toggle="tab" role="tab">Peso Ideal</a></li>              
            </ul>
          </div>
          <div class="card-body">
            <div class="tab-content">
              <div class="tab-pane show active" id="nav-imc" role="tabpanel" aria-labelledby="nav-home-tab">
                <calc type="Imc"></calc>
              </div>
              <div class="tab-pane show" id="nav-calorias" role="tabpanel" aria-labelledby="nav-home-tab">
                <calc type="Weight"></calc>
              </div>
              <div class="tab-pane show" id="nav-peso" role="tabpanel" aria-labelledby="nav-home-tab">
                <calc type="Kcal"></calc>
              </div>             
            </div>
          </div>
        </div>
      </transition>
    </div>    
  </section>
</template>

<script>
import Heading from '../components/HeadingContent.vue';
import Calc from '../components/calculators/Calc.vue';

export default {
  name: 'Calculadora',
  components: {
    Heading,
    Calc
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
  
.card-header-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
  color: $item-active;
  background-color: transparent;    
  border-bottom: 2px solid !important;
  font-size: 16px;
  font-weight: bold;    
}

.nav-tabs {
    border: none;
}

.card-header-tabs .nav-link {
    border: 1px solid transparent;    
    color: $item-active;
    font-size: 16px;
    font-weight: 600;
}

.card {
  position: relative;
  bottom: 75px;
  z-index: 2;
  -webkit-box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
  box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
  border: none;
}

</style>
