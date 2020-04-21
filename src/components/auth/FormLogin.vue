<template>
  <form ref="formLogin">        
        <div class="form-group">            
            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">            
        </div>
        <div class="form-group">            
            <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
        </div> 
        <b-overlay :show="loading" rounded opacity="0.6" spinner-small spinner-variant="primary" class="d-inline-block">      
            <button type="submit" v-on:click.prevent="submit" class="btn btn-success" >Entrar</button>
        </b-overlay>       
    </form> 
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            loading: false
        }
    },
    methods: {
        async submit () {
            this.loading = true;
            try {
                let formData = new FormData(this.$refs.formLogin);
                let response = await axios.post('http://127.0.0.1:8000/api/login', formData);
                this.loading = false;                        
                this.$toasted.global.nutrimarsValidationSuccess({message:response.data.success}).goAway(2500);
                this.$router.push('home');                                  
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
}
</script>

<style>

</style>