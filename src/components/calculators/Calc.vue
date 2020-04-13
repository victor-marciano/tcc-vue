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
    @import "../../assets/scss/_variables.scss";

    ::v-deep .subtitle {
        position: relative;
        bottom: 10px;   
    }
    
    ::v-deep .reference {
        font-size: 12px;  
    }

    ::v-deep .form-control {
        border: none;
        border-bottom: 1px solid silver;        
        box-shadow: inset 0 -1px 0 #ddd;  
        &:focus {
            border-bottom: 2px solid $theme-default;    
        }  
    }
</style>
