<template>
    <div class="father-container">
        <div>
            <h1></h1>
        </div>
        <div class="container">
            <div class="title-container">
                <h2>Formulario de Registro</h2>
            </div>
            <form v-on:submit.prevent="signup">
                <div class="container-child">
                <div class="box">
                    <div class="box-name"><p>Nombre:</p></div>
                    <div class="box-content"><input type="text" name="" id="nombre" v-model="usuario.nombre" required></div>     
                </div>

                <div class="box" name="" id="">
                    <div class="box-name"><p>Apellído:</p></div>
                    <div class="box-content"><input type="text" name="" id="apellido" v-model="usuario.apellido" required></div>                
                </div>

                <div class="box">
                    <div class="box-name"><p>Código:</p></div>
                    <div class="box-content"><input type="text" name="" id="codigo" v-model="usuario.codigo" required></div>
                </div>

                <div class="box">
                    <div class="box-name"><p>Cédula:</p></div>
                    <div class="box-content"><input type="number" name="" id="cedula" v-model="usuario.cedula" required></div>
                </div>

                <div class="box">
                    <div class="box-name"><p>Correo electrónico:</p></div>
                    <div class="box-content"><input type="email" name="" id="correo" v-model="usuario.correo" required></div>
                </div>
                <div class="box">
                    <div class="box-name"><p>Contraseña:</p></div>
                    <div class="box-content"><input type="password" name="" id="contraseña" v-model="usuario.contraseña" required></div>
                </div>
                <div class="container-button">
                    <input type="submit" value="Registrarse">
                </div>
            </div>
                
            </form>
            
            
            
        </div>
    </div>
</template>

<script>

export default {
    name: "MenuSignUp",
    data: function(){
        return{
           /* nombre: "",
            apellido: "",
            codigo: "",
            cedula: "",
            Correo: "",
            Contraseña: "",
            error: false,
            error_msg: "",*/
            usuario:{}
        }
        
    },
    methods:{
        signup(){
            /*alert("Usuario " + this.nombre + " Registrado con éxito");*/
            console.log(this.usuario);
            var enviodeDatos={
                nombre:this.usuario.nombre,
                apellido:this.usuario.apellido,
                codigo:this.usuario.codigo,
                cedula:this.usuario.cedula,
                correo:this.usuario.correo,
                contraseña:this.usuario.contraseña
            }
            fetch('http://localhost/phpmyadmin/sql.php?db=autoconductor&table=usuarios&pos=0',{
                method:"POST", 
                body:JSON.stringif(enviodeDatos)
            })
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
        width: 60%;
        height: 550px;
        opacity: 0.8;
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
    .title-container{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        height: 90px;
        font-size: 1.5rem;
        font-family: 'Montserrat', sans-serif;

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
    .box-content:hover{
        background: linear-gradient(to bottom, transparent, #111);
        outline: none;
        border-bottom: 3px solid #e01313;
    }
    .container-child{
        padding: 25px;
    }
    .container-button{
        display: flex;
        margin-left: 38%;
        height: 50px;
    }
    input[type=submit]{
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
    }
    input[type=submit]:active{
        background: linear-gradient(to bottom, #ec1b1b, #c57d7d);
    }
</style>