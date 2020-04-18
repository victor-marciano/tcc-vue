<template>    
    <form> 
        <div class="row mb-2">            
            <div class="col-md-6 col-xs-12">                        
                <input v-model="email" class="form-control form-control-sm" id="exampleInputEmail1" placeholder="Seu Email">                        
            </div>        
            <div class="col-md-6 col-xs-12">                        
                <strong></strong>                                  
            </div>                   
        </div>           
           
        <div class="row mb-2">
            <div class="col-md-6 col-xs-12">                        
                <input type="password" v-model="password" class="form-control form-control-sm" id="exampleInputPassword1" placeholder="Senha">
                <small class="text-muted">Conter entre 8 e 14 caractéres</small>                   
            </div>
            <div class="col-md-6 col-xs-12">               
                <small>Força da senha: <strong :class="feedback">{{ strenght }}</strong></small>                   
            </div>
        </div>
        <div class="row  mb-2">
            <div class="col-md-6 col-xs-12">                        
                <input type="text" v-model="name" class="form-control form-control-sm"  placeholder="Nome Completo">                                   
            </div>
        </div>
        <div class="row  mb-2">
            <div class="col-md-6 col-xs-12">                        
                <input type="text" v-model="celphone" class="form-control form-control-sm" placeholder="Celular">                                   
            </div>
        </div>        
        <button type="submit" class="btn btn-success mt-2 float-right" >Salvar</button>
    </form>    
</template>

<script>
export default {
    data() {
        return {
            password: '',
            strenght: '',
            name: '',
            email: '',
            celphone: '',
            feedback: ''           
        }
    },

    vuelidation: {
      data: {
        email: {
          required: true,
        },
      },
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