<template>
    <div class="card">
        <div class="card-content p-2">
            <img class="card-icon" alt="Imagem" :src="require(`../../assets/img/png/${icon}.png`)">           
            &nbsp;<strong :style="evaluating" class="macro-info">{{ qty }}/{{ max }}</strong><small>{{ unit }}</small>           
        </div>      
    </div> 
</template>

<script>
export default {
    name: 'CardKcal',
    props: {
        icon: String,
        unit: String,
        qty: Number,
        max: Number    
    },

    computed : {
        evaluating () {
            return {
                color: (this.qty >= this.max) ? 'green' : 'red',
            }
        }
    }
}
</script>

<style style="scss" scoped>
    .macro-info {
        font-size: 32px;       
    }
</style>