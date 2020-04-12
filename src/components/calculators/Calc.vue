<template>
    <component :is="calcType"></component>
</template>

<script>
export default {
    name: 'Calc',
    props: {
        type: String        
    },

    data() {
        return {
            calcType: ''
        }
    },

    computed: {
        loadType () {    
            return () => import(`./${this.type}`);
        }
    },

    created() {
        this.calcType = async () => await this.loadType();             
    }
}
</script>

<style lang="scss" scoped>
    .title {
        
    }

    ::v-deep .subtitle {
        position: relative;
        bottom: 10px;   
    }
    
    ::v-deep .reference {
        font-size: 12px;  
    }

    .card {

    }
</style>
