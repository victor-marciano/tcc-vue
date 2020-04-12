<template>
    <transition enter-active-class="fadeInUp">
        <div class="container">
            <h4 class="title">O que é IMC?</h4>
            <small class="subtitle text-muted">Uma das maneiras de saber se o seu peso está adequado à sua altura é calculando o Índice de Massa Corporal (IMC).</small>
            <div class="info mt-3">
                O resultado dessa fórmula matemática poderá indicar, por exemplo, se você está com peso adequado, se apresenta magreza, sobrepeso ou obesidade. Considere apenas como um ponto de partida, pois o IMC não avalia o seu estado nutricional como todo e precisa ser interpretado por um profissional de saúde, que analisará uma série de outras medidas e características suas, como idade, sexo, percentual de gordura, entre outros aspectos, antes de um diagnóstico.
                A fórmula do IMC é a mesma para todas as pessoas. O que muda são os pontos de corte, ou seja, os valores considerados como referências para a classificação do seu peso. Essas referências são específicas para crianças, adolescentes, adultos, idosos e gestantes.
                Para calcular do IMC, divida o seu peso (em quilos) pela sua altura (em metros) elevada ao quadrado, ou seja, altura x altura. Veja a fórmula:
                IMC = P(peso em quilos)/A² (altura x altura, em metros)
                <p>
                    <cite class="reference text-muted">Fonte: 
                        <a href=" https://www.saude.gov.br/artigos/781-atividades-fisicas/40389-o-que-e-imc">
                        https://www.saude.gov.br/artigos/781-atividades-fisicas/40389-o-que-e-imc
                        </a>
                    </cite>
                </p>
                <h5>Calcule seu IMC agora!</h5>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <form id="imcCalc">
                        <div class="form-group">
                          <label for=""></label>
                          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Sua altura">
                          
                        </div>
                        <div class="form-group">
                          <label for=""></label>
                          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Seu peso">
                          
                        </div>
                        <div class="form-group">
                          <label for=""></label>
                          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Sua idade">
                          
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">                                
                                <input class="form-check-input" name="gender" type="radio" id="male" value="m" checked>
                                <svg class="gender">
                                    <use xlink:href="../../assets/img/genders.svg#male"></use>
                                </svg>
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">                                
                                <input class="form-check-input" name="gender" type="radio" id="female" value="f">
                                <svg class="gender">
                                    <use xlink:href="../../assets/img/genders.svg#female"></use>
                                </svg>
                            </label>
                        </div>
                    </form>
                </div>
                <div class="col-md-6 text-center">
                    Resultado
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'IMC'
}
</script>

<style lang="scss" scoped>
    .gender {       
        width: 40px;
        height: 40px;
    }

    .form-check-input { 
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* IMAGE STYLES */
    .form-check-input + svg {
        cursor: pointer;
    }

    /* CHECKED STYLES */
    // .form-checked-input:hover + svg {
    //    color: darken(blue, 15%)
    // }    

    .gender:hover {
    //    fill: black;
       fill-opacity: 0.7;
       transform: translate3d(-1px, -2px, 0px);        
    }
    
    .form-check-input:checked + .gender {
       fill-opacity: 1;
       filter: brightness(85%);          
       transform: none;    
    }
</style>