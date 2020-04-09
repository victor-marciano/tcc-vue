<template>
  <section class="profile">
      <div class="container">
          <div class="row">
              <div class="col-md-8 col-xs-12">
                  <CardEdit></CardEdit>
              </div>
              <div class="col-md-4 col-xs-12">
                  <CardProfile></CardProfile>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import CardProfile from '../components/profile/CardProfile';
import CardEdit from '../components/profile/CardEdit';

export default {
    components: {
        CardProfile,
        CardEdit
    }
}
</script>

<style lang="scss" scoped>
    .card {
        margin-top: 15px;    
        -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
        margin-bottom: 5px;
        border: none;
    }
</style>

