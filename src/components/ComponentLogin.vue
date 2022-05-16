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
                    <router-link to="user" class="btn btn-danger">Entrar</router-link>
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
        margin-top: 11%;
        margin-bottom: 10%;
        border-radius: 15px;
        width: 57%;
        height: 400px;
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
        border-bottom: 3px solid #ff5858;
    }
    .box-name{
        width: 240px;
        font-family: 'Montserrat', sans-serif;
        
    }
    input{
        width: 100%;
        background-color: #696D7D;
        height: 35px;
        color: #fff;
        font-size: 18px;
        background: transparent;
        border: none;
    }
    /* input[type=submit]{
        font-family: 'Montserrat', sans-serif;
        width: 135px;
        height: 45px;
        font-size: 20px;
        cursor: pointer;
        border-radius: 10px;
        border: none;
        background: #f74040;
        color: #fff;
        margin-top: 40px;
    } */
    .container-button{
        display: flex;
        margin-left: 38%;
        margin-top: 35px;
    } 
    .box-content:hover{
        background: linear-gradient(to bottom, transparent, #111);
        outline: none;
        border-bottom: 3px solid #e01313;
    }
    .container-child{
        padding: 25px;
    }
        
    /* input[type=submit]:active{
        background: linear-gradient(to bottom, #ec1b1b, #c57d7d);
    } */

</style>