<template>
    <div>
        <div v-for="(type, index) in types" :key="index">            
            <div :class="['tab-pane fade', (index === 0 ? 'active show' : '')]" :id="type.id" role="tabpanel" aria-labelledby="nav-home-tab">
                <div class="type">
                    <h2 class="mt-2">{{ type.title }}</h2>
                    <small class="subtitle text-muted">{{ type.subtitle }}</small>
                    <p class="mt-2">{{ type.about }}</p>
                    <cite>Fonte: <a :href="`${type.fonte}`"> {{ type.fonte }}</a></cite>
                </div>
                <div>
                    <h4>Vamos fazer esse cálculo</h4>
                    Área da calculadora    
                </div>  
                {{ index }}      
            </div>  
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calc',
    props: {
        types: {
            type: Array            
        }        
    }
}
</script>

<style lang="scss" scoped>
    .subtitle {
        position: relative;
        bottom: 10px;
    }

    cite {
        font-size: 12px;
    }
</style>
