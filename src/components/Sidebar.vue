<template>    
    <div :class="['sidebar', mini ? 'sidebar-mini' : '']" data-theme="dark">
        <div class="sidebar-toggler p-3 mt-1">
            <span class="toggle-link" style="font-size: 1.7em;" v-on:click="mini = !mini">
                <font-awesome-icon icon="bars"></font-awesome-icon>
            </span>
        </div>    
        <div class="logo-area">
            <div class="logo">
                <img :src="getLogo" alt="Logo">
            </div>
        </div>         
        <div class="menu" data-theme="default">            
            <ul>
                <li class="menu-item mb-3">
                    <router-link class="nav-link" to="/home" exact-active-class="active" data-toggle="tooltip" data-placement="top" title="Inicio">
                        <div class="sidebar-icon-area">
                            <span class="sidebar-icon">
                                <font-awesome-icon icon="home"></font-awesome-icon> 
                            </span>
                        </div>
                        <div class="sidebar-icon-text">
                            Inicio
                        </div>
                    </router-link>                   
                </li>
                <li class="menu-item mb-3">  
                    <router-link class="nav-link" to="/dieta" exact-active-class="active" :title="[mini ? 'Dietas' : '']">
                        <div class="sidebar-icon-area">
                            <span class="sidebar-icon">
                                <font-awesome-icon icon="utensils"></font-awesome-icon>                  
                            </span>
                        </div>
                        <div class="sidebar-icon-text">
                            Dieta
                        </div>
                    </router-link>
                </li>
                <li class="menu-item mb-3">  
                    <router-link class="nav-link" to="/treino" exact-active-class="active" :title="[mini ? 'Treinos' : '']">
                        <div class="sidebar-icon-area">
                            <span class="sidebar-icon">
                                <font-awesome-icon icon="dumbbell"></font-awesome-icon> 
                            </span>
                        </div>
                        <div class="sidebar-icon-text">
                            Treinos
                        </div>
                    </router-link>                  
                </li>
                <li class="menu-item mb-3">  
                    <router-link class="nav-link" to="/nutri" exact-active-class="active" :title="[mini ? 'Área do nutricionista' : '']">
                        <div class="sidebar-icon-area">
                            <span class="sidebar-icon">
                                <font-awesome-icon icon="stethoscope"></font-awesome-icon>
                            </span>
                        </div>
                        <div class="sidebar-icon-text">
                            Área do Nutricionista
                        </div>
                    </router-link>                  
                </li>                
                <li class="menu-item mb-3">                    
                    <router-link class="nav-link" to="/calculadoras" exact-active-class="active" :title="[mini ? 'Calculadoras' : '']">
                        <div class="sidebar-icon-area">
                            <span class="sidebar-icon">
                                <font-awesome-icon icon="weight"></font-awesome-icon>
                            </span>                            
                        </div>
                        <div class="sidebar-icon-text">
                            Calculadoras
                        </div>
                    </router-link>                    
                </li>
                <li class="menu-item mb-3">                    
                    <router-link class="nav-link" to="/articles" exact-active-class="active" :title="[mini ? 'Artigos' : '']">
                        <div class="sidebar-icon-area">
                            <span class="sidebar-icon">
                                <font-awesome-icon icon="newspaper"></font-awesome-icon>                            
                            </span>
                        </div>
                        <div class="sidebar-icon-text">
                            Artigos
                        </div>                            
                    </router-link>                    
                </li>
                <li class="menu-item mb-3">                    
                    <router-link class="nav-link" to="/accounts" exact-active-class="active" :title="[mini ? 'Usuários cadastrados' : '']">
                        <div class="sidebar-icon-area">
                            <span class="sidebar-icon">
                                <font-awesome-icon icon="users"></font-awesome-icon>                            
                            </span>
                        </div>
                        <div class="sidebar-icon-text">
                            Contas
                        </div>                            
                    </router-link>                    
                </li>
            </ul>    
        </div>
        <div class="sidebar-need-auth">
            <button class="btn btn-primary">Cadastre-se</button>    
        </div>       
    </div> 
</template>

<script>
export default {
    props: {
        active: Boolean
    },

    data() {
        return {
            mini: false,
            active_on_mobile: this.active
        }
    },

    computed: {
        getLogo () {
            return (this.mini) ? require('../assets/img/nutrimarsIcon.png') : require('../assets/img/nutrimars14.png');
        },
        isActive () {    
            return this.active_on_mobile;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/scss/_variables.scss";
    
    .sidebar[data-theme='dark']{
        --sidebar-background: #1C1C1C;
        --sidebar-text: white;
        --sidebar-menu-link-background-hover: #EAECEE;
    }
    
    .sidebar[data-theme='light']{
        --sidebar-background: whitesmoke;
        --sidebar-text: black;
        --sidebar-menu-link-background-hover: #EAECEE;
    }
    
    .sidebar[data-theme='default']{
        --sidebar-background: #ccffe6;
        --sidebar-text: white;
        --sidebar-menu-link-background-hover: #EAECEE;
    }    

    .sidebar {        
        background-color: $sidebar-theme;    
        float: left; 
        width: 20%;
        height: 100vh;  
        max-width: 100%;           
        position: -webkit-sticky;
        position: sticky;
        top: 0;    
        -webkit-box-shadow: 2px 0px 11px -1px rgba(0,0,0,0.34);
        -moz-box-shadow: 2px 0px 11px -1px rgba(0,0,0,0.34);
        box-shadow: 2px 0px 11px -1px rgba(0,0,0,0.34);
        margin-right: 1px;  
        z-index: 1; 
        transition: 0.5s;                
        
        &.sidebar-mini {
            width: 5%;
            overflow: hidden;
            .sidebar-icon-text {    
                display: none;
            }   
            .sidebar-icon-area{
                margin-bottom: 15px;
            }
            .sidebar-toggler {
                justify-content: center;
            }   
            .sidebar-need-auth {
                display: none;
            }
        }

        .logo-area {  
            display: flex;
            justify-content: center;
            align-items: center;        
            width: 100%;   
            height: 100px; 
            .logo {
                width: 75%;
                img{            
                    max-width: 100%;
                    max-height: 100%;                
                }
            } 
        }

        .sidebar-toggler {
            height: 50px;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;    
            .toggle-link {
                cursor: pointer;
                color: gray;
                &:hover {
                    color: white;
                }
            }
        }    

        .menu ul{                              
            -webkit-padding-start: 0;
            list-style-type: none;    
            color: gray;    
            
            .menu-item {
                border-radius: $border-radius-dashboard;
                
                .active {    
                     .sidebar-icon {
                         color: $theme-default;   
                     }    
                     .sidebar-icon-text {
                         color: $theme-default;
                     }                                     
                }

                 &:hover {
                    .sidebar-icon-area {
                        -webkit-box-shadow: 0px 0px 5px 0px $theme-default;
                        -moz-box-shadow: 0px 0px 5px 0px $theme-default;
                        box-shadow: 0px 0px 5px 0px $theme-default;  
                    }
                    .sidebar-icon {
                        color: $theme-default;   
                    }    
                    .sidebar-icon-text {
                        color: $theme-default;
                    }                                     
                }
            }

            .sidebar-icon-area {
                float: left;
                background-color: lighten(#1C1C1C, 5%);
                display: flex;
                align-items: center;
                justify-content: center;
                width: 35px;
                height: 35px;
                -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
                box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);   
            }

            .sidebar-icon {
                font-size: 20px;
                border-radius: 50%;
            } 
            
            .sidebar-icon-text {
                font-size: 16px;
                font-weight: 400;
                position: relative;
                left: 15px;
                top: 5px;
            }

        }

        .sidebar-need-auth {
            display: flex;
            justify-content: center; 
            position: relative;
            top: 110px;
            button {
                -webkit-box-shadow: 0px 0px 5px 0px $theme-default;
                -moz-box-shadow: 0px 0px 5px 0px $theme-default;
                box-shadow: 0px 0px 5px 0px $theme-default;
                background-color: $theme-default;
                color: #454545;
                border:none; 
                font-size: 18px;
                font-weight: bold; 
                width: 90%;  
                &:hover{
                    background-color: darken($theme-default, 15%);
                }
            }
        }

        a {
            color: inherit;
            text-decoration: none;
        }
    }

    .menu[data-theme="default"]{
        --item-active: #7DD196;
    }

    .menu[data-theme="secondary"]{
        --item-active: #ec9f13;
    }

    @media (max-width: 900px) {
        .sidebar {
            display: none;    
        }
    }
</style>

