<template>
    <header class="container-nav">
        <div class="menu">
            <nav class="menu-list">
                <div class="menu-item"><i class="fa fa-home"></i><router-link to="/">Inicio</router-link></div>
                <div class="menu-item"><i class="fa fa-user"></i><router-link to="/login">Iniciar sesión</router-link></div>
                <div class="menu-item"><i class="fa fa-address-card"></i><router-link to="/signup">Registrarse</router-link></div>
                <drop-down-componet title="Categorías" :items="services" />
                <div class="menu-item"><i class="fa fa-phone"></i><router-link to="/contact">Contacto</router-link></div>
            </nav>
        </div>
    </header>
</template>


<script>

import DropDownComponet from '../components/DropDownComponent.vue'
export default {
    name: "MenuComponent",
    components: {
        DropDownComponet
    },
    data (){
        return {
            services: [
        {
            title: 'Vehiculo',
            link: '/car'
        },
        {
            title: 'Motocicleta',
            link: '/moto'
        }
        
        ]
        }
        
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        transition: all .5s ease-in-out;
    }
    html{
        font-size: 62.5%;
    }

    .container-nav{
        width: 100%;
        height: 5rem;
    }
    .menu{
        width: 100%;
        margin: 0;
        padding: 0;
        
    }
    .menu-list{
        display: flex;
        width: 100%;
        height: 5rem;
        background: #ff5858;
        justify-content: center;
        z-index: 30;
    }
    .menu-item{
        padding: 20px 50px;
        position: relative;
        text-align: center;
        font-size: 1.1rem;
        border-bottom: 3px solid transparent;
        font-family: 'Montserrat', sans-serif;
        transition: 0.4s;
        
    }
    .menu-item.active,
    .menu-item:hover{
        background: #5c5d5f;
        border-bottom-color: #ff5858;
    }
    i{
        color: #2A2D34;
    }
    a{
        color: #FBFBFF;
        padding-left: 10px;
        width: 40px;
    }
</style>
