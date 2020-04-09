<template>
    <section>        
        <nav class="navbar navbar-expand-sm navbar-light justify-content-between" data-theme="secondary">        
            <a v-on:click="showMenu" id="navbarToggler">        
                <span class="text-muted" style="font-size: 1.7em;">
                    <font-awesome-icon icon="bars"></font-awesome-icon>
                </span>
            </a>       
            
            <div class="mobile-logo d-md-none d-sm-block">
                <img src="../assets/img/nutrimars13.png" alt="">
            </div>

            <form class="form-inline" id="form-search">
                <input class="form-control mr-2" type="search" placeholder="Buscar no site" aria-label="Search">
                <button class="navbar-icon" type="submit">
                    <span style="font-size: 1.3em">
                        <font-awesome-icon icon="search"></font-awesome-icon>
                    </span>
                </button>
            </form>
            
            <div class="user-logged">
                <a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img class="navbar-icon" src="../assets/img/profile2.jpg" alt="User">    
                </a>
                <div class="dropdown-menu dropdown-menu-right mr-3" aria-labelledby="dropdownMenuLink">
                    <h6 class="dropdown-header">Victor Marciano <br><small>Nutricionista</small></h6>                
                    <h5 class="dropdown-header mt-2">Perfil</h5>                
                    <router-link class="dropdown-item" to="/profile">
                        <font-awesome-icon icon="user" class="mr-2"></font-awesome-icon>
                        Perfil
                    </router-link>   
                    <router-link class="dropdown-item" to="/config">
                        <font-awesome-icon icon="cogs" class="mr-2"></font-awesome-icon>
                        Configurações
                    </router-link>                    
                    <router-link class="dropdown-item" to="/logout">
                        <font-awesome-icon icon="sign-out-alt" class="mr-2"></font-awesome-icon>
                        Logout
                    </router-link>
                    <h6 class="dropdown-header mt-2">Opções</h6>             
                    <router-link class="dropdown-item" to="/logout">
                        <font-awesome-icon icon="sign-out-alt" class="mr-2"></font-awesome-icon>
                        Temas
                    </router-link>
                </div>   
            </div>

            <transition name="show" enter-active-class="slideInDown" leave-active-class="slideOutUp">        
                <div id="navbarMobile" v-if="navbar_menu_show">
                    <div class="menu mt-3">
                        <ul class="nav navbar-nav">
                            <li class="menu-item">
                                <router-link class="nav-link" to="/home" exact-active-class="active">
                                    <font-awesome-icon icon="home" class="mr-2 ml-2"></font-awesome-icon> 
                                    Inicio
                                </router-link>                   
                            </li>
                            <li class="menu-item">  
                                <router-link class="nav-link" to="/dieta" exact-active-class="active">
                                    <font-awesome-icon icon="utensils" class="mr-2 ml-2"></font-awesome-icon>                  
                                    Dieta
                                </router-link>
                            </li>
                            <li class="menu-item">  
                                <router-link class="nav-link" to="/treino" exact-active-class="active">
                                    <font-awesome-icon icon="dumbbell" class="mr-2 ml-2"></font-awesome-icon> 
                                    Treinos
                                </router-link>                  
                            </li>
                            <li class="menu-item">  
                                <router-link class="nav-link" to="/nutri" exact-active-class="active">
                                    <font-awesome-icon icon="user-md" class="mr-2 ml-2"></font-awesome-icon>
                                    Área do Nutricionista
                                </router-link>                  
                            </li>                
                            <li class="menu-item">                    
                                <router-link class="nav-link" to="/imc" exact-active-class="active">
                                    <font-awesome-icon icon="weight" class="mr-2 ml-2"></font-awesome-icon>
                                    Calculadoras
                                </router-link>                    
                            </li>
                            <li class="menu-item">                    
                                <router-link class="nav-link" to="/article" exact-active-class="active">
                                    <font-awesome-icon icon="weight" class="mr-2 ml-2"></font-awesome-icon>
                                    Artigos
                                </router-link>                    
                            </li>
                        </ul>                
                    </div>
                </div>
            </transition>
        </nav>       
    </section>
</template>

<script>
export default {
    data () {
        return {
            navbar_menu_show: false
        }
    },

    methods: {
        showMenu () { this.navbar_menu_show = !this.navbar_menu_show }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/scss/_variables.scss";

    #navbarToggler {
        display: none;
    }

    nav[data-theme="default"] {        
        --navbar-theme: linear-gradient(90deg, rgba(125,209,150,1) 0%, rgba(199,226,199,1) 35%, rgba(231,245,235,1) 100%);
    }
    
    nav[data-theme="secondary"] {        
        --navbar-theme: linear-gradient(90deg, rgba(236,159,19,1) 0%, rgba(236,185,108,1) 35%, rgba(230,218,197,1) 100%);
    }

    nav {
        background: $navbar-gradient;
    }

    .navbar-icon {
        width: 40px;
        height: 40px;        
        border-radius: 50%;
        -webkit-box-shadow: 3px 10px 17px -7px rgba(0,0,0,0.50);
        -moz-box-shadow: 3px 10px 17px -7px rgba(0,0,0,0.50);
        box-shadow: 3px 10px 17px -7px rgba(0,0,0,0.50);
        border: none;
        background-color: white;
        color: $theme-secondary;
    } 

    .navbar-icon:hover {
        box-shadow: none;
        span {
            color: darken($theme-secondary, 15%)
        }
    }

    .user-logged {
        .dropdown-menu {
            border: none;
            -webkit-box-shadow: 0px 0px 7px -2px rgba(102,99,102,1);
            -moz-box-shadow: 0px 0px 7px -2px rgba(102,99,102,1);
            box-shadow: 0px 0px 7px -2px rgba(102,99,102,1);

            .dropdown-header {
                font-weight: bold;
                margin-bottom: 10px;
            }

            .dropdown-item {    
                font-size: 14px;
            }       
        }
    }    

    #form-search {
        width: 33%;
        input {
            width: 80%;
            border-radius: $border-radius-dashboard;
            border:none;
            font-size: 14px;
            -webkit-box-shadow: 0px 5px 10px -8px rgba(0,0,0,0.85);
            -moz-box-shadow: 0px 5px 10px -8px rgba(0,0,0,0.85);
            box-shadow: 0px 5px 10px -8px rgba(0,0,0,0.85);
        }
    }

    @media (max-width: 900px) {
        .bg-theme {
           background: whitesmoke;
            color: white;
        }

        #form-search {
            display: none;
        }

        #navbarToggler {
            display: block;
        }

        .mobile-logo {
            height: 100%;
            max-width: 275px;
            img {
                width: 100%;
            }
        }        

        .menu ul{ 
            width: 42vh;               
            list-style-type: none;
            font-size: 14px;
            color: black;      
            z-index: 1;    
            
            .menu-item {                                
                -webkit-box-shadow: 0px 0px 3px -2px rgba(102,99,102,1);
                -moz-box-shadow: 0px 0px 3px -2px rgba(102,99,102,1);
                box-shadow: 0px 0px 3px -2px rgba(102,99,102,1);               
                
                .nav-link {
                    color: black;
                }

                .active {
                    background-color: $theme-default;
                    border-radius: inherit;
                }
            }
           
        }
    }
    
</style>


