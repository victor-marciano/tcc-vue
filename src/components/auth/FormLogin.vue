<template>
  <form ref="formLogin">        
        <div class="form-group">            
            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">            
        </div>
        <div class="form-group">            
            <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Senha">
        </div>       
        <button type="submit" v-on:click.prevent="submit" class="btn btn-success" >Entrar</button>       
    </form> 
</template>

<script>
import axios from 'axios';

export default {
    methods: {
        async submit () {
            try {
                let formData = new FormData(this.$refs.formLogin);
                let response = await axios.post('http://127.0.0.1:8000/api/login', formData);                        
                this.$toasted.global.nutrimarsValidationSuccess({message:response.data.success}).goAway(2500);
                this.$router.push('home');  
                                  
            } catch (error) {
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