<template>
  <section>      
    <heading-content></heading-content>
    <Article></Article> 
  </section>
</template>

<script>
import Article from '../components/articles/Article.vue';
import HeadingContent from '../components/HeadingContent.vue';

export default {
    components: {
        HeadingContent,
        Article    
    }   
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';

.article-tab #tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: $item-active;
    background-color: transparent;    
    border-bottom: 3px solid !important;
    font-size: 16px;
    font-weight: bold;
    
}

.nav-tabs {
    border: none;
}

.article-tab .nav-link {
    border: 1px solid transparent;    
    color: $item-active;
    font-size: 16px;
    font-weight: 600;
}

</style>