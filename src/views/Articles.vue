<template>
  <section>      
    <heading-content></heading-content>    
    <Article :articles="getArticles"></Article>   
  </section>
</template>

<script>
import Article from '../components/articles/Article.vue';
import HeadingContent from '../components/HeadingContent.vue';
import axios from 'axios';

export default {
    components: {
        HeadingContent,
        Article    
    },

    data() {
        return {
            articleData: null
        }
    },
    
    async created() {    
        let response = await axios.get('http://127.0.0.1:8000/api/artigos');
        this.articleData = response.data;         
    },   

    computed: {
        getArticles () {
            return this.articleData;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';


</style>