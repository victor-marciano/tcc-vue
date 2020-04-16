<template>
    <div class="yz-widget" data-calculator-type="bmi" data-language="pt" data-unit-system="metric" data-background-color="#EEEEEE" data-text-color="#212121" data-primary-color="#7DD196" data-alternate-background-color="#FFFFFF" data-alternate-text-color="#FFFFFF" data-secondary-color="#ec9f13"><span class="yz-copyright">Powered by <a href="https://www.yazio.com/pt/calculadora-imc">YAZIO</a></span></div>        
</template>

<script>
export default {
    created() {
        let scriptCalc = document.createElement('script');
        scriptCalc.setAttribute('src', 'https://widget.yazio.com/calculator.js');
        scriptCalc.async = true;
        document.body.insertAdjacentElement('afterend', scriptCalc);
    },
}
</script>