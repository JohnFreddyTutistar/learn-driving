<template>
  <div class="father-container">
      <div class="container">
          <div class="img-container">
              <img src="../assets/user.png" alt="">
              <h1>Freddy Mercury</h1>
              <h4>Aprendiz</h4>
              <h5>Escoge una categoría</h5>
              <router-link to="car" class="btn btn-outline-dark">Vehículo</router-link>
              <router-link to="moto" class="btn btn-outline-dark">Motocicleta</router-link>
          </div>
          <router-link to="user" class="btn btn-link">&lt; Volver</router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: "courses"
}
</script>

<style scoped>
.father-container{
        height: 550px;
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
    h4{
        border-bottom: solid 1px #888;
        padding-bottom: 25px;
    }

    .img-container{
        margin: auto;
        text-align: center;
    }
    img{
        width: 200px;
    }
    h5{
        color:#ff5858;
        margin: 30px 0 30px 0;
    }
</style>