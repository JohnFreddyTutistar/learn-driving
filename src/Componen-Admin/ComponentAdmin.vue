<template>
  <div class="container">
        <div class="card">
          
          <div class="card-header">
            <h1>Usuarios</h1>
          </div>
          <router-link to="create" class="btn btn-outline-success btn-lg">Agregar nuevo usuario</router-link>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Codigo</th>
                  <th>Cedula</th>
                  <th>Correo</th>
                  <th>Contraseña</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="usuario in usuarios" :key="usuario.id">
                  <td>{{usuario.id}}</td>
                  <td>{{usuario.nombre}}</td>
                  <td>{{usuario.apellido}}</td>
                  <td>{{usuario.codigo}}</td>
                  <td>{{usuario.cedula}}</td>
                  <td>{{usuario.correo}}</td>
                  <td>{{usuario.contrasena}}</td>
                  <td>

                    <div class="btn-group" role="group" aria-label="">
                        <!-- <button type="button" class="btn btn-info">Editar</button> -->
                        <router-link to="Edit" class="btn btn-info">Editar</router-link>
                        <router-link to="admin" v-on:click="borrarEmpleado(usuario.id)" class="btn btn-danger">Borrar</router-link>
                    </div>

                  </td>
                   
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          
        </div>
      
  </div>
</template>

<script>
export default {
 name: "componentadmin",

    data(){
      return{
        usuarios:[]
      }
    },

   created:function(){
      this.consultarUsuarios();

    },
    methods:{
      consultarUsuarios(){
        fetch('http://localhost/back-php/')
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{


          console.log(datosRespuesta)
          this.usuarios=[]
          if(typeof datosRespuesta[0].success==='undefined'){
            this.usuarios=datosRespuesta;
          }


        })
        .catch(console.log)
      },
      borrarEmpleado(id){
        console.log(id);

        fetch('http://localhost/back-php/?borrar='+id)
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{


          console.log(datosRespuesta)

          window.location.href="admin"


        })
        .catch(console.log)

      }
    }

}
</script>

<style>

</style>