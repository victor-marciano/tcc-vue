<template>  
    <header>
        <nav>
            
        </nav>
    </header>  
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
@import '../assets/scss/_variables.scss';
    .content-header {
        width: inherit;
        height: 60px;    
        display: flex;    
    } 

$purple: $theme-secondary;
$pink: lighten($purple, 15%);

header {
    // background-image: linear-gradient(90deg, rgba(236,159,19,1) 0%, rgba(236,185,108,1) 35%, rgba(230,218,197,1) 100%);;
    background-image: linear-gradient(90deg, rgba(125,209,150,1) 0%, rgba(199,226,199,1) 35%, rgba(231,245,235,1) 100%);
    height: 15vh;
    min-height:120px;
    width: 100%;
    display:flex;
    // align-items:flex-end;
    // overflow: hidden;
    nav {
        width:100%;        
        border-bottom:20px solid #fff;
        filter: drop-shadow(0 -4px 4px rgba(darken($purple, 30%),.3));   
    }
}
</style>