<template>
    <transition name="show" enter-active-class="fadeInDown" appear>        
        <b-card class="text-center">
            <b-form>
                <b-row>
                    <b-col col md="6" xs="12" class="mb-2">
                        <b-input type="text" id="text-password" aria-describedby="password-help-block" placeholder="Nome completo"></b-input>
                    </b-col>
                    <b-col md="6" xs="12" class="mb-2">
                        <b-input type="text" id="text-password" aria-describedby="password-help-block" placeholder="Email"></b-input>
                    </b-col>                
                </b-row>
                <b-row>
                    <b-col md="6" xs="12" class="mb-2">
                        <b-input type="text" id="text-password" aria-describedby="password-help-block" placeholder="Senha"></b-input>
                    </b-col>
                    <b-col md="6" xs="12" class="mb-2">
                        <b-input type="text" id="text-password" aria-describedby="password-help-block" placeholder="Celular"></b-input>
                    </b-col>                
                </b-row>
                <b-button variant="primary" class="float-left">Salvar</b-button>
            </b-form>
        </b-card>
    </transition>
</template>

<script>
export default {
    name: 'CardEdit'
}
</script>

<style lang="scss" scoped>
    
</style>