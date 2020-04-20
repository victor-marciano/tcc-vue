<template>   
    <b-modal id="auth-modal" title="Acesso" hide-header="no" hide-footer="true">
        <b-tabs pills>
            <b-tab title="Cadastro" active><form-save></form-save></b-tab>
            <b-tab title="Login"><form-login></form-login></b-tab>
        </b-tabs>                
    </b-modal>      
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