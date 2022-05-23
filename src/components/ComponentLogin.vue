<template>
    <div class="father-container">
        <div class="container">
            <div class="title-container">
                <h2>Iniciar Sesión</h2>
            </div>
            <div class="container-child">
                <!-- Vinculamos las variables con v-model -->
                <form v-on:submit.prevent="login">
                    <div class="box">
                    <div class="box-name"><p>Usuario:</p></div>
                    <div class="box-content"><input type="text" name="" id="usuario" v-model="usuario" required></div>     
                </div>

                <div class="box" name="" id="">
                    <div class="box-name"><p>Contraseña:</p></div>
                    <div class="box-content"><input type="password" name="" id="contraseña" v-model="contraseña" required></div>                
                </div>
                <div class="container-button">
                    <router-link to="user" class="btn btn-light btn-lg btn-block">Entrar</router-link>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "ComponentLogin",
    //la funcion data siempre debe retornar algo
    data: function(){
        return {
            usuario: "",
            contraseña: "",
            error: false,
            error_msg: ""
        }
    },
    methods:{
        login(){
            alert("Bienvenido " + this.usuario + "");
            //alert(this.contraseña);
        }
    }
}
</script>

<style scoped>
    .father-container{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        width: 900px;
        margin: auto;
    }
    .container{
        display: inline-block;
        background-color: #2A2D34;
        flex-wrap: wrap;
        margin: 11% 0 10% 0; 
        border-radius: 15px;
        width: 57%;
        height: 330px;
        opacity: 0.8;
    }
    .title-container{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        height: 90px;
        font-size: 1.5rem;
        font-family: 'Montserrat', sans-serif;
        border-bottom: solid 1px rgb(224, 221, 221);

    }
    .container-child{
        padding: 25px;
    }
    .box{
        display:flex;
        height: 35px;
        justify-content: left;
        align-items: center;
        color: #fff;
        font-size: 20px;
        margin-top: 15px;

    }
    .box-content{
        margin-left: 55px;
        justify-content: right;
        display: flex;
        width: 285px;
        font-family: 'Montserrat', sans-serif;
        border: none;
        /* border-bottom: 3px solid #ff5858; */
        border-bottom: 3px solid #fff;
    }
    .box-name{
        width: 240px;
        font-family: 'Montserrat', sans-serif;
        
    }
    input{
        width: 100%;
        background-color: #696D7D;
        height: 28px;
        color: #fff;
        font-size: 18px;
        background: transparent;
        border: none;
    }
    .container-button{
        display: flex;
        margin-top: 35px;
    } 
    .box-content:hover{
        background: linear-gradient(to bottom, transparent, #111);
        outline: none;
        /* border-bottom: 3px solid #e01313; */
        border-bottom: 3px solid #999;
    }
    .container-child{
        padding: 25px;
    }

</style>