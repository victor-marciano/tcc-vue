<template>
  <section>
      <heading-content section="Artigos"></heading-content>
      <div class="container">
        <nav class="nav nav-tabs nav-stacked article-tab">
            <a class="nav-link active" data-toggle="tab" href="#articleInternet">Artigos da Internet</a>
            <a class="nav-link" data-toggle="tab" href="#articleSite">Artigos do site</a>          
        </nav>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="articleInternet" role="tabpanel" aria-labelledby="internet-tab">
                Mundo
            </div>
            <div class="tab-pane fade" id="articleSite" role="tabpanel" aria-labelledby="site-tab">
                Net
            </div>            
        </div>
      </div>
  </section>
</template>

<script>
import HeadingContent from '../components/HeadingContent.vue';

export default {
    components: {
        HeadingContent
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