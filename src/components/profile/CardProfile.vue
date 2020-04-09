<template>
    <div class="card">
        <div class="card-avatar-area p-3">
            <label for="file-input">                
                <img class="card-avatar" src="../../assets/img/profile2.jpg" alt="Foto Perfil">                             
            </label>

            <input id="file-input" type="file"/>            
        </div>
        <div class="card-body">
            <div class="profile-principal">
                <h5>
                    Nome usuário - 
                    <small class="text-muted">Tipo perfil</small>
                </h5>
            </div>
            <div class="profile-info">
                <p>Informações</p>
                <p>Nome</p>
                <p>Username</p>
                <p>Email</p>                
            </div>
            <div class="profile-social">
                <span>
                    <a href="#" class="mr-5">
                        <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>                    
                    </a>
                </span>
                <span>
                    <a href="#" class="mr-5">
                        <font-awesome-icon :icon="['fab', 'google-plus']"></font-awesome-icon>
                    </a>
                </span>
                <span>
                    <a href="#" class="mr-5">
                        <font-awesome-icon :icon="['fab', 'twitter-square']"></font-awesome-icon>
                    </a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardProfile'
}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/_variables.scss';

    .card-avatar-area {
        display: flex;
        justify-content: center;

        .card-avatar {
            width: 200px;
            height: 200px;
            border-radius: 50%;
        }
        
        input {
            display: none;
        }    
    }

    .profile-social {
        display: flex;
        justify-content: center;
        align-items: center;

        a:link {
            color: $theme-secondary;
        }
        
        a:visited {
            color: $theme-secondary;
        }
        
        a:hover {
            color: darken($theme-secondary, 15%);
        }
        
        span {
            font-size: 20px;
        }
    }

</style>