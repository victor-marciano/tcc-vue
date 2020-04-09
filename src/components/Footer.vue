<template>
    <div class="footer mt-3">        
        <div class="row align-middle">
            <div class="col-md-12">                
                <p class="text-muted">
                    <font-awesome-icon icon="copyright"></font-awesome-icon>
                    &nbsp;2020&nbsp; - NutriMars | Created by <a href="#">MarcianoDeveloper</a>                                    
                </p> 
            </div>
        </div>        
    </div>
</template>

<style lang="scss">
    @import '../assets/scss/_variables.scss';

    .footer {
        width: 100%;
        background-color: whitesmoke;        
        -webkit-box-shadow: 0px -3px 7px -5px rgba(0,0,0,0.55);
        -moz-box-shadow: 0px -3px 7px -5px rgba(0,0,0,0.55);
        box-shadow: 0px -3px 7px -5px rgba(0,0,0,0.55);        
        max-height: 100%;
        line-height: 50px;     
        
        a:link {
            color: $theme-secondary;
            text-decoration: none;
        }
        
        a:hover {
            color: darken($theme-secondary, 15%);
            text-decoration: none;
        }

        a:visited {
            color: lighten($theme-secondary, 15%);
            text-decoration: none;
        }
        
    }

    @media (max-width: 900px) {
        .footer {
            font-size: 12px;
            font-weight: 500;
            p {
                text-align: center;
            }
        }
    }

</style>