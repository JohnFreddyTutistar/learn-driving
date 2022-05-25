<template>
  <div class="father-container">
      <router-link to="/" class="btn btn-link">Cerrar sesión</router-link>
      <div class="container">
          
          <div class="img-container">
              <img src="../assets/user.png" alt="">
              <h1>Juan Casanova</h1>
              <h4>Licencia completa</h4>
              <div class="skills" id="skills">
            <div class="max_width">
                <h2 class="tittle"></h2>
                <div class="skills-content">
                    <div class="bars">
                        <div class="info">
                            <span>Barra de progreso</span>
                            <span>95%</span>
                        </div>
                    <div class="line html"></div>
                 </div>
	            </div>
	        </div>
            </div>
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
    name: "user2"
}
</script>

<style scoped>
    .father-container{
        height: 750px;
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

    /* Barra de progreso */
    .skills .tittle{
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    /* margin-bottom: 60px;
    padding-bottom: 20px; */
    font-family: 'Ubuntu', sans-serif;
    
}
.skills .tittle{
    position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    /* margin-bottom: 60px;
    padding-bottom: 20px; */
    font-family: 'Ubuntu', sans-serif;
}
/* .skills .tittle::before{
    content: "";
    position: absolute;
    width: 180px;
    bottom: 0;
    left: 50%;
    height: 3px;
    background: black; 
    transform: translateX(-50%);
} */
.skills .tittle::after{
    /* content: "Nivel de aprendizaje"; */
    position: absolute;
    bottom: -10px;
    left: 50%;
    font-size: 20px;
    color: #2874A6;
    padding: 5px;
    background: white;
    transform: translateX(-50%);
}
.skills .skills-content .bars{
    margin-bottom: 15px;
}
.skills .skills-content .info{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.skills .skills-content span{
    font-weight: 500;
    font-size: 20px;
}
.skills .skills-content .line{
    height: 5px;
    width: 100%;
    background: lightgray;
    position: relative;
}
.skills .skills-content .line::before{
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: #2874A6;
}
.skills-content .html::before{
    width: 95%;
}

</style>