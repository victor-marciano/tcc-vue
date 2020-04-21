<template>    
    <form ref="formSave"> 
        <div class="row mb-2">            
            <div class="col-md-6 col-xs-12">                        
                <input v-model="email" name="email" class="form-control form-control-sm" id="exampleInputEmail1" placeholder="Seu Email">                        
            </div>        
            <div class="col-md-6 col-xs-12">                        
                <strong></strong>                                  
            </div>                   
        </div>           
           
        <div class="row mb-2">
            <div class="col-md-6 col-xs-12">                        
                <input type="password" name="password" v-model="password" class="form-control form-control-sm" id="exampleInputPassword1" placeholder="Senha">
                <small class="text-muted">Conter entre 8 e 14 caractéres</small>                   
            </div>
            <div class="col-md-6 col-xs-12">               
                <small>Força da senha: <strong :class="feedback">{{ strenght }}</strong></small>                   
            </div>
        </div>
        <div class="row  mb-2">
            <div class="col-md-6 col-xs-12">                        
                <input type="text" name="name" v-model="name" class="form-control form-control-sm"  placeholder="Nome Completo">                                   
            </div>
        </div>
        <div class="row  mb-2">
            <div class="col-md-6 col-xs-12">                        
                <input type="text" name="celphone" v-model="celphone" class="form-control form-control-sm" placeholder="Celular">                                   
            </div>
        </div>        
        <b-overlay :show="loading" rounded opacity="0.6" spinner-small spinner-variant="primary" class="d-inline-block">
            <button type="submit" v-on:click.prevent="submit" class="btn btn-success mt-2" >Salvar</button>
        </b-overlay>
    </form>    
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            password: '',
            strenght: '',
            name: '',
            email: '',
            celphone: '',
            feedback: '',
            loading: false           
        }
    },

    methods: {
        passStrenght () {                           
            if (this.password.length < 8 || this.password.length > 20) {
                this.strenght = 'Inválida';
                this.feedback = 'text-danger';    
                return;
            }
            
            if (!this.password.match(/[A-Z]+/g) || !this.password.match(/\d/g)) {
                this.strenght = 'Fraca';  
                this.feedback = 'text-warning';  
            } else {
                this.strenght = 'Normal';
                this.feedback = 'text-primary';  
            }
            
            if (this.password.match(/[$-/:-?{-~!"^_`[\]]/) && this.password.match(/[A-Z]*/) && this.password.length >= 8) {
                this.strenght = 'Forte';    
                this.feedback = 'text-success';  
            }
        },       
        async submit () {
            this.loading = true;
            try {
                let formData = new FormData(this.$refs.formSave);
                let response = await axios.post('http://127.0.0.1:8000/api/user', formData);                        
                this.$toasted.global.nutrimarsValidationSuccess({message:response.data.success}).goAway(2500);
                this.loading = false;                    
            } catch (error) {
                this.loading = false;       
                const errors = error.response.data.errors;
                for (const validationError in errors) {                    
                    const message = errors[validationError][0];
                    this.$toasted.global.nutrimarsValidationError({message:message}).goAway(5000);    
                } 
            }
        }
    },
    watch: {
        password: {
            handler () {
                this.passStrenght();
            },
            deep: true    
        }
    },
}
</script>

<style>

</style>