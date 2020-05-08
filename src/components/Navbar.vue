<template>
    <section>
        <nav class="navbar navbar-expand-sm navbar-light justify-content-between" data-theme="default">
            <a v-on:click="showMenu" id="navbarToggler">        
                <span class="text-muted" style="font-size: 1.7em;">
                    <font-awesome-icon icon="bars"></font-awesome-icon>
                </span>
            </a>       
            
            <div class="mobile-logo d-md-none d-sm-block m-2">
                <img src="../assets/img/nutrimars14.png" alt="Logo">
            </div>

            <b-form @submit.stop.prevent class="form-inline" id="form-search">
                <b-input type="text" class="form-control mr-2" placeholder="Buscar no site"></b-input>
                <b-button variant="light" class="navbar-icon" type="submit">
                    <span style="font-size: 1.3em;">
                        <font-awesome-icon icon="search"></font-awesome-icon>
                    </span>
                </b-button>
            </b-form>
            
            <div class="user-logged" v-show="loggedUser">               
                <b-dropdown variant="link" toggle-class="text-decoration-none" no-caret dropleft>
                    <template v-slot:button-content>                    
                        <b-avatar variant="light" :src="require('../assets/img/png/kcal.png')"></b-avatar>
                    </template>
                    <b-dropdown-header><strong>Victor Marciano</strong><br><small>Administrador</small></b-dropdown-header>
                    <b-dropdown-item to="/profile"><b-icon-person-square class="mr-3"></b-icon-person-square>Profile</b-dropdown-item>
                    <b-dropdown-item to="/config"><b-icon-gear-fill class="mr-3"></b-icon-gear-fill>Configurações</b-dropdown-item>
                    <b-dropdown-item @click="logout"><b-icon-power class="mr-3"></b-icon-power>Logout</b-dropdown-item>
                </b-dropdown>                   
            </div>
            
            <transition name="show" enter-active-class="slideInLeft" leave-active-class="slideOutLeft">        
                <div class="navbarMobile" id="navbarMobile" v-if="navbar_menu_show">
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
                                    <font-awesome-icon icon="stethoscope" class="mr-2 ml-2"></font-awesome-icon>
                                    Área do Nutricionista
                                </router-link>                  
                            </li>                
                            <li class="menu-item">                    
                                <router-link class="nav-link" to="/calculadoras" exact-active-class="active">
                                    <font-awesome-icon icon="weight" class="mr-2 ml-2"></font-awesome-icon>
                                    Calculadoras
                                </router-link>                    
                            </li>
                            <li class="menu-item">                    
                                <router-link class="nav-link" to="/articles" exact-active-class="active">
                                    <font-awesome-icon icon="newspaper" class="mr-2 ml-2"></font-awesome-icon>
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
        showMenu () { this.navbar_menu_show = !this.navbar_menu_show },
        logout () {
            this.$store.dispatch('logout');
            this.$toasted.success('Deslogado').goAway(2500);
        }                     
    },
    
    computed: {
        loggedUser () {    
            return this.$store.getters.loggedUser;
        }
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
        // background-color: white;
        color: $theme-secondary;
        display:flex;
        justify-content: center;
        align-items: center;
    } 

    .navbar-icon:hover {
        box-shadow: none;
        span {
            color: darken($theme-secondary, 15%)
        }
    }

    .user-logged {
        position: relative;
        right: 10px; 
        bottom: 5px;       
        .dropdown {
            width: 40px;
            height: 40px;     
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
        
        nav[data-theme="secondary"] {        
            --navbar-theme: black;
        }
        
        nav[data-theme="default"] {        
            --navbar-theme: whitesmoke;
        }

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

        .navbar-mobile {
            width: max-content;
        }

        .mobile-logo {
            height: 100%;
            max-width: 275px;    
            img {
                width: 100%;
            }
        }        

        .menu ul{ 
            width: 51vh;             
            list-style-type: none;
            font-size: 16px;
            color: white;      
            z-index: 2;    
            
            .menu-item {                                
                -webkit-box-shadow: 0px 0px 3px -2px rgba(102,99,102,1);
                -moz-box-shadow: 0px 0px 3px -2px rgba(102,99,102,1);
                box-shadow: 0px 0px 3px -2px rgba(102,99,102,1);                 
                
                .nav-link {
                    color: white;
                }

                .active {
                    background-color: $theme-default;
                    border-radius: inherit;
                }
            }           
        }        
    }    
</style>
