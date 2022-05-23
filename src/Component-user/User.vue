<template>
  <div class="father-container">
      <router-link to="/" class="btn btn-link">Cerrar sesión</router-link>
      <div class="container">
          
          <div class="img-container">
              <img src="../assets/user.png" alt="">
              <h1>Freddie Mercury</h1>
              <h4>Aprendiz</h4>
          </div>
          <div class="information">
              El mejor embajador de su marca en la vía es un conductor con las competencias técnicas, 
              conductuales y legales que garanticen el pleno cumplimiento de la normatividad y seguridad 
              vial, disminuiyendo los riesgos de pérdidas humanas y activos causadas por accidentes 
              de tránsito o mal uso de los equipos y vehículos es una inversión inteligente y segura
          </div>
          <div class="container-options">
              <!-- <div class="box">
                  <img src="https://cdn-icons-png.flaticon.com/512/55/55205.png" alt="" class="car">
                  <p>Cursos</p>
              </div> -->
              <div class="box">
                <router-link to="courses">
                      <img src="https://cdn-icons-png.flaticon.com/512/55/55205.png" alt="" class="car">
                      <p class="text-box">Cursos</p>
                </router-link>
              </div> 
              <div class="box">
                  
                <router-link to="upload">
                      <img src="https://www.pngall.com/wp-content/uploads/2/Upload-PNG-Images.png" alt="" class="upload">
                      <p class="text-box">Subir archivos</p> 
                      
                </router-link>
              </div>
              <div class="box">
                  
                <router-link to="edit">
                      <img src="http://cdn.onlinewebfonts.com/svg/img_130996.png" alt="" class="conf">
                      <p class="text-box">Config Usuario</p>
                </router-link>
              </div>
              <!-- <div class="box">
                  <img src="http://cdn.onlinewebfonts.com/svg/img_130996.png" alt="" class="conf">
                  <p>Config</p>
              </div> -->
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "user"
}
</script>

<style scoped>
    .father-container{
        height: 700px;
        margin: auto;
        width: 900px;
        background-color: #fff;
        text-align: right;
    }
    .container{
        margin: auto;
        padding-top: 60px;
    }
    .img-container{
        margin: auto;
        text-align: center;
        border-bottom: solid 1px #888;
    }
    img{
        width: 200px;
    }
    .information{
        margin: auto;
        margin-top: 30px;
        width: 600px;
        text-align: center;
        font-size: 14px;
    }
    .container-options{
        display: flex;
        width: 500px;
        height: 100px;
        margin: auto;
        margin-top: 15px;

    }
    .box{
        width: 200px;
        background: #9c9c9c;
        margin: 5px;
        text-align: center;
        border-radius: 5px;
    }
    .box:hover{
        background: #2473ac;
    }
    .upload{
        width: 53px;
    }
    .car{
        width: 45px;
    }
    .conf{
        width: 40px;
        margin-top: 5px
    }

</style>