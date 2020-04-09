<template>
    <div class="sidebar" data-theme="light">    
        <div class="logo-area m-3">
            <div class="logo">
                <img src="../assets/img/nutrimars13.png" alt="Logo">
            </div>
        </div>         
        <div class="menu" data-theme="default">            
            <ul class="m-4">
                <li class="menu-item mb-3">
                    <router-link class="nav-link" to="/home" exact-active-class="active">
                        <font-awesome-icon icon="home" class="mr-2"></font-awesome-icon> 
                        Inicio
                    </router-link>                   
                </li>
                <li class="menu-item mb-3">  
                    <router-link class="nav-link" to="/dieta" exact-active-class="active">
                        <font-awesome-icon icon="utensils" class="mr-2"></font-awesome-icon>                  
                        Dieta
                    </router-link>
                </li>
                <li class="menu-item mb-3">  
                    <router-link class="nav-link" to="/treino" exact-active-class="active">
                        <font-awesome-icon icon="dumbbell" class="mr-2"></font-awesome-icon> 
                        Treinos
                    </router-link>                  
                </li>
                <li class="menu-item mb-3">  
                    <router-link class="nav-link" to="/nutri" exact-active-class="active">
                        <font-awesome-icon icon="user-md" class="mr-2"></font-awesome-icon>
                        Área do Nutricionista
                    </router-link>                  
                </li>                
                <li class="menu-item mb-3">                    
                    <router-link class="nav-link" to="/calculadoras" exact-active-class="active">
                        <font-awesome-icon icon="weight" class="mr-2"></font-awesome-icon>
                        Calculadoras
                    </router-link>                    
                </li>
                <li class="menu-item mb-3">                    
                    <router-link class="nav-link" to="/articles" exact-active-class="active">
                        <font-awesome-icon icon="weight" class="mr-2"></font-awesome-icon>
                        Artigos
                    </router-link>                    
                </li>
            </ul>    
        </div>       
    </div> 
</template>

<style lang="scss" scoped>
    @import "../assets/scss/_variables.scss";
    
    .sidebar[data-theme='dark']{
        --sidebar-background: black;
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
        color: $sidebar-text;
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

        .menu {
            border-top: 1px solid silver;    
        }      

        .menu ul{                              
            -webkit-padding-start: 0;
            list-style-type: none;
            font-size: 14px;
            
            .menu-item {
                border-radius: $border-radius-dashboard;    
                
                .active {
                    background-color: $item-active;
                    border-radius: inherit;
                }
            }

            .menu-item:hover {                
                background-color: $sidebar-hover;
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

