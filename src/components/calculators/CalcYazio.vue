<template>
    <b-row>      
        <b-tabs pills vertical active :nav-class="['p-3']">
            <b-tab title="IMC"><Imc></Imc></b-tab>
            <b-tab title="Kcal diárias"><kcal></kcal></b-tab>
            <b-tab title="Peso Ideal"><weight></weight></b-tab>
            <b-tab title="Gasto calórico"><burn></burn></b-tab>
        </b-tabs>     
    </b-row>    
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
</style>