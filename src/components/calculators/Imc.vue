<template>
    <transition enter-active-class="fadeInUp">
        <div class="container">
            <h4 class="title">O que é IMC?</h4>
            <small class="subtitle text-muted">Uma das maneiras de saber se o seu peso está adequado à sua altura é calculando o Índice de Massa Corporal (IMC).</small>
            <div class="info mt-3">
                O resultado dessa fórmula matemática poderá indicar, por exemplo, se você está com peso adequado, se apresenta magreza, sobrepeso ou obesidade. Considere apenas como um ponto de partida, pois o IMC não avalia o seu estado nutricional como todo e precisa ser interpretado por um profissional de saúde, que analisará uma série de outras medidas e características suas, como idade, sexo, percentual de gordura, entre outros aspectos, antes de um diagnóstico.
                A fórmula do IMC é a mesma para todas as pessoas. O que muda são os pontos de corte, ou seja, os valores considerados como referências para a classificação do seu peso. Essas referências são específicas para crianças, adolescentes, adultos, idosos e gestantes.
                Para calcular do IMC, divida o seu peso (em quilos) pela sua altura (em metros) elevada ao quadrado, ou seja, altura x altura. Veja a fórmula:
                IMC = P(peso em quilos)/A² (altura x altura, em metros). Confira abaixo uma tabela que mostra o IMC ideal para cada altura e peso,
                lembrando que há uma leve diferença dependendo do gênero da pessoa.
                <p>
                    <cite class="reference text-muted">Fonte: 
                        <a href=" https://www.saude.gov.br/artigos/781-atividades-fisicas/40389-o-que-e-imc">
                        https://www.saude.gov.br/artigos/781-atividades-fisicas/40389-o-que-e-imc
                        </a>
                    </cite>
                </p>
                <figure>
                    <img class="img-fluid mx-auto d-block" src="../../assets/img/png/tabela-imc.png" width="500px" height="500" alt="IMC">
                    <figcaption class="text-muted">Imagem: Dr Glaucio Borges</figcaption>
                </figure>
                <h5 class="mt-5">Calcule seu IMC agora!</h5>
            </div>
            <div class="row">
                <div class="col-md-6 p-3">
                    <form id="imcCalc" v-on:submit.prevent="runImc" ref="myForm">
                        <div class="form-group">                          
                          <input type="text" class="form-control form-control-sm" name="altura" id="" aria-describedby="helpId" placeholder="Sua altura">
                        </div>
                        <div class="form-group">                          
                          <input type="text" class="form-control form-control-sm" name="peso" id="" aria-describedby="helpId" placeholder="Seu peso">
                        </div>
                        <div class="form-group">                         
                          <input type="text" class="form-control form-control-sm" name="idade" id="" aria-describedby="helpId" placeholder="Sua idade">
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">                                
                                <input class="form-check-input" name="gender" type="radio" id="male" value="m">
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
                        <button type="submit" class="btn btn-primary">Calcular</button>
                    </form>
                </div>
                <transition enter-to-class="lightSpeedIn" leave-to-class="lightSpeedOut">
                    <div v-if="getResult" class="col-md-6 text-center" :key="getResult[1]">
                        Resultado
                        <div class="result-area mb-2">                        
                            <figure>                           
                                <img :src="getResult[1]" alt="" class="p-3">
                                <figcaption>{{ `Seu IMC é ${this.imc}! ${getResult[0]} `}}</figcaption>                            
                            </figure>                        
                        </div>
                    </div>                
                </transition>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'IMC',
    data() {
        return {
            imc: 0,
            gender: 0,    
            resultData: [
                {
                    value: [17,18,19],
                    resultImg: 'skinny',
                    resultText: `Significa que você está abaixo do peso ideal`
                },
                {
                    value: [20,21,22,23,24],
                    resultImg: 'normal',
                    resultText: `portanto você está no peso ideal, continue assim!`
                },
                {
                    value: [25,26,27,28,29],
                    resultImg: 'fat',
                    resultText: `Você está um pouco acima do peso, nada grave, se seu peso for composto por muita massa muscular, portanto pode se considerar no peso ideal.`
                },
                {
                    value: [30,31,32,33,34],
                    resultImg: 'obesity',
                    resultText: `Você está obeso e corre certo risco.`
                },
                {
                    value: [35,36,37,38,39],
                    resultImg: 'warning',
                    resultText: `Você deve começar a perder peso imediatamente, ja está em estado de obesidade mórdbida e corre sérios riscos de saúde`
                }
            ]   
        }
    },
    methods: {
        runImc () {
            this.imc = false;
            setTimeout(() => {
                let formData = new FormData(this.$refs.myForm);
                let altura = formData.get('altura') / 100;
                let peso = formData.get('peso');
                this.imc = (peso / (altura * altura)).toFixed(1);
                this.gender = (formData.get('gender') === 'm') ? 0 : 1;
            }, 1000);            
        },
        mountImageUrl (img) {
            return require(`../../assets/img/weight/${img}.png`);
        }    
    },
    computed: {
        getResult () {   
            if (!this.imc) {
                return;
            }
            let result = this.resultData.filter(obj => obj.value.indexOf(Math.round(this.imc - this.gender)) !== -1);
            let resultObj = result[0];
            let arrData = [resultObj.resultText, this.mountImageUrl(resultObj.resultImg)];                
            return arrData;
        }         
    },
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

    .gender:hover {
       fill-opacity: 0.7;
       transform: translate3d(-1px, -2px, 0px);        
    }
    
    .form-check-input:checked + .gender {
       fill-opacity: 1;
       filter: brightness(75%);          
       transform: translate3d(-1px, -2px, 0px);    
    }

    figcaption {
        font-size: 12px;
        font-weight: bold;
    }
</style>