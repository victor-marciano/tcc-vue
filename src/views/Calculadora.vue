<template>
  <section>
    <heading></heading>
    <div class="container">
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
              <!-- <div class="tab-pane fade show active" id="nav-imc" role="tabpanel" aria-labelledby="nav-home-tab">
                <calc></calc>
              </div>
              <div class="tab-pane fade show" id="nav-calorias" role="tabpanel" aria-labelledby="nav-home-tab">
                <calc></calc>
              </div>
              <div class="tab-pane fade show" id="nav-peso" role="tabpanel" aria-labelledby="nav-home-tab">
                <calc></calc>
              </div>               -->
              <calc v-bind:types="types"></calc>
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
  },

  data() {
    return {
      types: [
        {
          id: 'nav-imc',
          title: 'O que é IMC?',
          subtitle: 'Uma das maneiras de saber se o seu peso está adequado à sua altura é calculando o Índice de Massa Corporal (IMC).',
          about: `O resultado dessa fórmula matemática poderá indicar, por exemplo, se você está com peso adequado, se apresenta magreza, sobrepeso ou obesidade. Considere apenas como um ponto de partida, pois o IMC não avalia o seu estado nutricional como todo e precisa ser interpretado por um profissional de saúde, que analisará uma série de outras medidas e características suas, como idade, sexo, percentual de gordura, entre outros aspectos, antes de um diagnóstico.
            A fórmula do IMC é a mesma para todas as pessoas. O que muda são os pontos de corte, ou seja, os valores considerados como referências para a classificação do seu peso. Essas referências são específicas para crianças, adolescentes, adultos, idosos e gestantes.
            Para calcular do IMC, divida o seu peso (em quilos) pela sua altura (em metros) elevada ao quadrado, ou seja, altura x altura. Veja a fórmula:
            IMC = P(peso em quilos)/A² (altura x altura, em metros)`,
          fonte: `https://www.saude.gov.br/artigos/781-atividades-fisicas/40389-o-que-e-imc`
        },
        {
          id: 'nav-calorias',
          title: 'O quanto eu devo comer ?',
          subtitle: 'Todo mundo se preocupa com o próprio peso, mas será que sabem realmente o quanto deveriam de fato estar pesando? confira aqui!',
          about: `O resultado dessa fórmula matemática poderá indicar, por exemplo, se você está com peso adequado, se apresenta magreza, sobrepeso ou obesidade. Considere apenas como um ponto de partida, pois o IMC não avalia o seu estado nutricional como todo e precisa ser interpretado por um profissional de saúde, que analisará uma série de outras medidas e características suas, como idade, sexo, percentual de gordura, entre outros aspectos, antes de um diagnóstico.
            A fórmula do IMC é a mesma para todas as pessoas. O que muda são os pontos de corte, ou seja, os valores considerados como referências para a classificação do seu peso. Essas referências são específicas para crianças, adolescentes, adultos, idosos e gestantes.
            Para calcular do IMC, divida o seu peso (em quilos) pela sua altura (em metros) elevada ao quadrado, ou seja, altura x altura. Veja a fórmula:
            IMC = P(peso em quilos)/A² (altura x altura, em metros)`
        },
        {
          id: 'nav-peso',
          title: 'Mas afinal, qual é seu peso ideal?',
          subtitle: 'Todo mundo se preocupa com o próprio peso, mas será que sabem realmente o quanto deveriam de fato estar pesando? confira aqui!',
          about: `O resultado dessa fórmula matemática poderá indicar, por exemplo, se você está com peso adequado, se apresenta magreza, sobrepeso ou obesidade. Considere apenas como um ponto de partida, pois o IMC não avalia o seu estado nutricional como todo e precisa ser interpretado por um profissional de saúde, que analisará uma série de outras medidas e características suas, como idade, sexo, percentual de gordura, entre outros aspectos, antes de um diagnóstico.
            A fórmula do IMC é a mesma para todas as pessoas. O que muda são os pontos de corte, ou seja, os valores considerados como referências para a classificação do seu peso. Essas referências são específicas para crianças, adolescentes, adultos, idosos e gestantes.
            Para calcular do IMC, divida o seu peso (em quilos) pela sua altura (em metros) elevada ao quadrado, ou seja, altura x altura. Veja a fórmula:
            IMC = P(peso em quilos)/A² (altura x altura, em metros)`
        }
      ]   
    }
  },

  computed: {
    getCalcs: () => {  
      return this.types;
    } 
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
