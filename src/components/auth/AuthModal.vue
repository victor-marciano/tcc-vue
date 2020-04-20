<template>
  <div class="modal" id="authModal">
    <div class="modal-dialog">
        <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Cadastro</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Login</a>
                </li>                
            </ul>            
            <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <form-save></form-save>                    
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <form-login></form-login>
                </div>                
            </div>
        </div>

        </div>
    </div>
  </div>
</template>

<script>
import FormSave from './FormSave.vue';
import FormLogin from './FormLogin.vue';

export default {
 name: 'AuthModal',
 components: {
     FormSave,
     FormLogin
 }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/_variables.scss";

    ::v-deep .form-control {
        border: none;
        border-bottom: 1px solid #ced4da;

        &:focus {
            box-shadow: inset 0 -0.5px 0 green;
            border: none;
        }
    }

    .modal-header {
        display: flex;
        justify-items: center;
    }
    ::v-deep .nav-item {
        width: 20vh;
        .nav-link {
            color: black;
            &.active {
                background-color: $theme-secondary;
            }
        }
    }
</style>