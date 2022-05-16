<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h1>Editar Usuario</h1> 
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="actualizarRegistro">
                    <div class="form-group">
                        <label for="nombre">Nombre:</label>
                        <input type="text" required class="form-control" name="nombre" v-model="usuario.nombre" id="nombre" aria-describedby="helpId" placeholder="Nombre">
                        
                    </div>
                    <div class="form-group">
                        <label for="apellido">Apellido:</label>
                        <input type="text" required class="form-control" name="apellido" v-model="usuario.apellido" id="apellido" aria-describedby="helpId" placeholder="apellido">
                        
                    </div>
                    <div class="form-group">
                        <label for="codigo">Codigo:</label>
                        <input type="text" required class="form-control" name="codigo" v-model="usuario.codigo" id="codigo" aria-describedby="helpId" placeholder="codigo">
                        
                    </div>
                    <div class="form-group">
                        <label for="cedula">Cedula</label>
                        <input type="number" required class="form-control" name="cedula" v-model="usuario.cedula" id="cedula" aria-describedby="helpId" placeholder="cedula">
                        
                    </div>
                    <div class="form-group">
                        <label for="correo">correo:</label>
                        <input type="email" required class="form-control" name="correo" v-model="usuario.correo" id="correo" aria-describedby="helpId" placeholder="correo">
                        
                    </div>
                    <div class="form-group">
                        <label for="contrasena">Contraseña:</label>
                        <input type="password" required class="form-control" name="contrasena" v-model="usuario.contrasena" id="contrasena" aria-describedby="helpId" placeholder="contraseña">
      
                    </div>
                    <div class="btn-group" role="group" aria-label="">
                        <button type="submit" class="btn btn-success">Modificar</button>
                        <router-link to="admin" class="btn btn-warning">Cancelar</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    name:"edit",
    data(){
     return{

         usuario: {}

     }
 },
 /*created:function(){
     
 },
 /*methods:{
  
        obtenerInformacionID(){
        fetch('http://localhost/back-php/?consultar='+this.route.params.id)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{


        console.log(datosRespuesta)
        this.usuarios=datosRespuesta[0];
          


        })
        .catch(console.log)
      
     }
 }*/
}
</script>

<style scoped>
    .form-group{
        display: flex;
    }
    input{
        margin-left: 50px;
        width: 500px;
    }
    label{
        width: 150px;
    }
</style>