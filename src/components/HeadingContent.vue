<template>  
    <section class="container content-header align-items-center">
        <div class="row align-middle">
            <div class="col-12">
                <h4 class="text-muted mb-4">{{ section }}</h4>      
            </div>
        </div>
    </section>  
</template>

<script>
export default {
    name: 'Heading',
    props: {
        section: String
    }
}
</script>

<style lang="scss" scoped>
    .content-header {
        width: inherit;
        height: 100px;    
        display: flex;    
    } 
</style>