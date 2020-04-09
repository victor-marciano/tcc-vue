.<template>
        <article>
            <div class="container">
                <div class="row">
                  <transition name="fade" mode="out-in" appear :duration="1000">
                    <div class="col-md-4 col-xs-12 mb-4">
                        <div class="card">                         
                          <img class="card-img-top" src="../../assets/img/profile2.jpg" alt="">
                          <div class="card-details">
                            
                          </div>
                          <div class="card-body">
                            <h6 class="text-muted">Author</h6>
                            <a href=""><h5 class="card-title">Titulo da noticia</h5></a>
                            <p class="card-text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                          </div>
                          <div class="card-footer text-muted">
                            Publicado em 24/09/2017
                          </div>
                        </div>
                    </div>
                  </transition>                  
                  <transition name="fade" mode="out-in" appear :duration="1000">
                    <div class="col-md-4 col-xs-12 mb-4">
                        <div class="card">                         
                          <img class="card-img-top" src="../../assets/img/profile2.jpg" alt="">
                          <div class="card-details">
                            
                          </div>
                          <div class="card-body">
                            <h6 class="text-muted">Author</h6>
                            <a href=""><h5 class="card-title">Titulo da noticia</h5></a>
                            <p class="card-text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                          </div>
                          <div class="card-footer text-muted">
                            Publicado em 24/09/2017
                          </div>
                        </div>
                    </div>
                  </transition>                  
                  <transition name="fade" mode="out-in" appear :duration="1000">
                    <div class="col-md-4 col-xs-12 mb-4">
                        <div class="card">                         
                          <img class="card-img-top" src="../../assets/img/profile2.jpg" alt="">
                          <div class="card-details">
                            
                          </div>
                          <div class="card-body">
                            <h6 class="text-muted">Author</h6>
                            <a href=""><h5 class="card-title">Titulo da noticia</h5></a>
                            <p class="card-text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                          </div>
                          <div class="card-footer text-muted">
                            Publicado em 24/09/2017
                          </div>
                        </div>
                    </div>
                  </transition>                  
                </div>
            </div>
        </article>    
</template>

<script>
export default {
    name: 'Article',
    props: {
      title: String,
      src: String,
      description: String
    }
}

</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variables.scss';

article {
    position: relative;
    bottom: 50px;
    z-index: 2;
}

.card {
    -webkit-box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 5px 21px -10px rgba(0,0,0,0.75);
    border: none; 
    transition: all .5s ease;     
    
    .card-img-top {
      height: 150px;
      object-fit: cover;  
    }

    a:link {
      color: $theme-secondary;
      text-decoration: none;
      h5 {
        color: $theme-secondary;
        font-weight: bold;
      }
      &:visited {
        color: $theme-secondary;
      }
    }

    .card-details {
      clear: both;
    }

    .card-footer {
      border: none;
      font-size: 12px;
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