<template>
    <div class="row">
        <div class="col-md-2 col-xs-12">
            <ul class="nav flex-column nav-pills mt-3 mb-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <li class="nav-item"><a class="nav-link active" href="#nav-imc" data-toggle="pill" role="pill">IMC</a></li>
                <li class="nav-item"><a class="nav-link" href="#nav-calorias" data-toggle="pill" role="pill">Kcal diárias</a></li>
                <li class="nav-item"><a class="nav-link" href="#nav-peso" data-toggle="pill" role="pill">Peso Ideal</a></li>              
                <li class="nav-item"><a class="nav-link" href="#nav-gasto" data-toggle="pill" role="pill">Gasto calórico</a></li>              
            </ul>
        </div>
        <div class="col-md-10 col-xs-12">
            <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane show active" id="nav-imc" role="tabpanel" aria-labelledby="nav-home-tab">
                    <Imc></Imc>            
                </div>
                <div class="tab-pane show" id="nav-calorias" role="tabpanel" aria-labelledby="nav-home-tab">
                    <kcal></kcal>            
                </div>
                <div class="tab-pane show" id="nav-peso" role="tabpanel" aria-labelledby="nav-home-tab">
                    <weight></weight>            
                </div>             
                <div class="tab-pane show" id="nav-gasto" role="tabpanel" aria-labelledby="nav-home-tab">
                    <burn></burn>
                </div>             
            </div>
        </div>
    </div>    
</template>

<script>
import Imc from './Imc.vue';
import Weight from './Weight.vue';
import Kcal from './Kcal.vue';
import Burn from './Burn.vue';

export default {       
    components: {
        Imc,
        Kcal,
        Weight,
        Burn
    },

    created() {
        let scriptYazio = document.createElement('script');
        scriptYazio.setAttribute('src', 'https://widget.yazio.com/calculator.js');
        scriptYazio.async = true;
        document.body.insertAdjacentElement('afterend', scriptYazio);    
    }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_variables.scss";

    .yz-widget {
        font-family: 'Open Sans', sans-serif !important;
        margin-top: 15px !important;        
    }
    
    .nav-link {
        color: $theme-secondary;
        &.active {
            background-color: $theme-secondary;
        }
    }
</style>