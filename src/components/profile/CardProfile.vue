<template>
    <transition name="show" enter-active-class="fadeInRight" appear>
        <div class="card">
            <div class="card-avatar-area">
                <label for="file-input">                
                    <img class="card-avatar" src="../../assets/img/profile2.jpg" alt="Foto Perfil">
                    <div class="back-avatar">
                        <span style="font-size: 30px;">
                            <font-awesome-icon :icon="['fas', 'camera-retro']"></font-awesome-icon>
                        </span>
                    </div>                             
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
    </transition>
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
        width: 100%;
        transition: .5s ease;
        backface-visibility: hidden;      
        width: 200px;
        height: 200px;
        align-self: center;
        padding: 10px; 
        
        .card-avatar {
            border-radius: 50%; 
            width: 100%;
            height: 100%;
        }

        .back-avatar {   
            width: 40px;
            height: 40px; 
            transition: .5s ease;
            opacity: 0;
            position: absolute;
            bottom: 70%;
            left: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            text-align: center;    
        }
        
        input {
            display: none;
        }   

        &:hover {
            .card-avatar {
                &:hover {
                    opacity: 0.5;
                    cursor: pointer;      
                }
            }

            .back-avatar {
                opacity: 1;
                cursor: pointer;
            }
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