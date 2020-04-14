<template>
    <div class="sidebar" data-theme="dark">    
        <div class="logo-area p-5">
            <div class="logo">
                <img src="../assets/img/nutrimars14.png" alt="Logo">
            </div>
        </div>         
        <div class="menu" data-theme="default">            
            <ul class="m-2">
                <li class="menu-item mb-3">
                    <router-link class="nav-link" to="/home" exact-active-class="active">
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
                    <router-link class="nav-link" to="/dieta" exact-active-class="active">
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
                    <router-link class="nav-link" to="/treino" exact-active-class="active">
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
                    <router-link class="nav-link" to="/nutri" exact-active-class="active">
                        <div class="sidebar-icon-area">
                            <span class="sidebar-icon">
                                <font-awesome-icon icon="user-md"></font-awesome-icon>
                            </span>
                        </div>
                        <div class="sidebar-icon-text">
                            Área do Nutricionista
                        </div>
                    </router-link>                  
                </li>                
                <li class="menu-item mb-3">                    
                    <router-link class="nav-link" to="/calculadoras" exact-active-class="active">
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
                    <router-link class="nav-link" to="/articles" exact-active-class="active">
                        <div class="sidebar-icon-area">
                            <span class="sidebar-icon">
                                <font-awesome-icon icon="weight"></font-awesome-icon>                            
                            </span>
                        </div>
                        <div class="sidebar-icon-text">
                            Artigos
                        </div>                            
                    </router-link>                    
                </li>
            </ul>    
        </div>       
    </div> 
</template>

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
        
        .logo-area {  
            width: 100%;    
            .logo img{            
                max-width: 100%;
                max-height: 100%;                
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

