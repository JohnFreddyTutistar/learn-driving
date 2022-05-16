<template>
  <div class="father-container">
      <div class="container">
          <div class="img-container">
              <img src="../assets/user.png" alt="">
              <h1>Freddy Mercury</h1>
              <h4>Aprendiz</h4>
              <h5 style="color:#ff5858">Escoge una categoría</h5>
              <router-link to="categorycar" class="btn btn-outline-dark">Vehículo</router-link>
              <router-link to="categorymoto" class="btn btn-outline-dark">Motocicleta</router-link>
          </div>
          <router-link to="user" class="btn btn-link">←Volver</router-link>
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
        height: 500px;
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
</style>