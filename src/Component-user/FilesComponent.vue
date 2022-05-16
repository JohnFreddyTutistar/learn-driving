<template>
  <div class="father-container">
      <div class="container">
          <div class="img-container">
              <img src="../assets/user.png" alt="">
              <h1>Freddy Mercury</h1>
              <h4>Aprendiz</h4>
          </div>
          <div class="upload-container">
              <h1>Subir archivos</h1>
          
            <div class="box-files">
                Subir documento de identidad: ⬇
                <input type="file" class="form-control" placeholder="Cédula de ciudadanía">
            </div>
            <div class="box-files">
                subir fotografía: ⬇
                <input type="file" class="form-control" placeholder="Forografía">
               
            </div>
            <div class="box-files">
                Subir exámen médico: ⬇
                <input type="file" class="form-control" placeholder="Exámen médico">
            </div>
            <div class="upload-files">
                <router-link to="user" class="btn btn-success">Subir</router-link>
                <router-link to="user" class="btn btn-danger">Cancelar</router-link>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "filecomponent"
}
</script>

<style scoped>
.father-container{
        height: 800px;
        /* display: flex; */
        margin: auto;
        width: 900px;
        background-color: #fff;
    }
    .container{
        /* display: flex; */
        margin: auto;
        padding-top: 60px;
    }
    .out{
        color: black;
        padding: 10px;
    }

    .img-container{
        margin: auto;
        text-align: center;
    }
    img{
        width: 200px;
    }
    .upload-container{
        /* display: flex; */
        width: 400px;
        margin: auto;
        margin-top: 25px;
        text-align: center;
        color: #ff5858;
    }
    .box-files{
        margin: auto;
        margin-top: 15px;
        color: #000;
    }
    .upload-files{
        margin-top: 15px;
    }

</style>