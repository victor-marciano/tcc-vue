<template>    
  <div class="container-fluid articles">
    <div class="row">          
      <div class="col-md-4 col-xs-12 mb-4" v-for="article in articles" :key="article.id">
        <transition name="fade" mode="out-in" appear>
          <div class="card">                         
            <img class="card-img-top" :src="article.urlToImage" alt="">            
            <div class="card-body">
              <h6 class="text-muted">{{ article.author }}</h6>
              <a class="card-title" :href="article.url">{{ article.title }}</a>
              <!-- <p>{{ article.description }}</p> -->
            </div>
            <div class="card-footer text-muted">
              Publicado {{ article.publishedAt }}
            </div>
          </div>
        </transition>                              
      </div>          
    </div>
  </div>        
</template>

<script>
export default {
    name: 'Article',
    props: {
      type: String,
      articles: Array
    }
}

</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';

.articles {
    position: relative;
    bottom: 80px;
    z-index: 2;    
}

.card {
    -webkit-box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
    border: none; 
    transition: all .5s ease;     
    max-height: 300px;
    height: 300px;

    .card-body {  
      p, .card-title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
        -webkit-box-orient: vertical;
      }    
    }
    
    .card-img-top {
      height: 125px;
      object-fit: cover;  
    }

    a:link {
      color: $theme-secondary;
      text-decoration: none;
      font-weight: bold;
      font-size: 16px;
      
      &:visited {
        color: darken($theme-secondary, 15%);
      }

      &:hover {
        color: darken($theme-secondary, 15%);
      }

    }

    .card-details {
      clear: both;
    }

    .card-footer {
      border: none;
      font-size: 11px;
    }
    
    &:hover {
      transform: translate3D(0,-1px,0) scale(1.03);
      transition: all .4s ease;
      
    }
}

.fade-enter-active,
.fade-leave-active {
  & > * {
    transition-duration: 500ms;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(.6,.15,.35,.8);
  }
  
}

$delay: 100ms;
$delayStep: 100ms;

.fade-enter,
.fade-leave-to {
  & > * {
    opacity: 0;
    transform: translateY(80px);
  }
}
.fade-enter-active {
  & > * {
    &:nth-child(2) {
      transition-delay: $delay;
    }
    &:nth-child(3) {
      transition-delay: $delay + $delayStep;
    }
  }
}
.fade-leave-active {
  & > * {
    &:nth-child(1) {
      transition-delay: $delay + $delayStep;
    }
    &:nth-child(2) {
      transition-delay: $delay;
    }
  }
}
</style>