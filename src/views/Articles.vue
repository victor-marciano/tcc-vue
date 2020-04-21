<template>
  <section>      
    <heading-content></heading-content>   
    <b-overlay id="overlay-background" :show="loading" variant="dark" spinner-variant="success" spinner-type="border" :opacity="0.10"> 
        <Article :articles="getArticles"></Article>
    </b-overlay>   
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
            articleData: null,
            loading: true
        }
    },
    
    async created() {    
        let response = await axios.get('http://127.0.0.1:8000/api/artigos');
        this.articleData = response.data;
        this.loading = false;         
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