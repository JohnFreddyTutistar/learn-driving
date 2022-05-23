<template>
  <div class="container">
      <div class="title">
          <h1>Detalles de la tarjeta de crédito</h1>
      </div>
      <div class="child-container">
          <div class="container-image">
            <img src="../assets/pago3.png" alt="" width="350">
          </div>
          <div class="container-form">
            <div class="details-target">
                <input type="text" placeholder="Nombre" class="info">
                <input type="number" placeholder="Numero de tarjeta" class="info"><br><br>
                <div class="box-child">
                    <input type="text" placeholder="MM" class="date">
                    <div class="slash">/</div>
                    <input type="year" placeholder="YYYY" class="date"><br><br>
                </div>
                <input type="text" placeholder="CSV" class="csv">
                <div class="medios">
                    <img src="../assets/medios.jpg" alt="" width="450px">
                </div>
            </div>
            <div class="container-buttons">
                <div class="button-primary">
                    <button class="btn btn-primary btn-lg btn-block" >Pagar con la terjeta de credito</button>
                </div>
                <div class="button-primary">
                    <button class="btn btn-secondary btn-lg btn-block">Proceder con el pago en linea </button>
                </div>
            </div>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .container{
        height: 600px;
        background-color: #fff;
    }
    .child-container{
        display: flex;
        margin-top: 50px;
    }
    .container-image{
        margin: auto;
        width: 300px;
        display: flex;
    }
    .title{
        padding-top: 20px;
        text-align: center;
        border-bottom: solid 2px rgb(219, 216, 216);
        padding-bottom: 10px;
        color: #555;
    }
    input{
        margin-right: 10px;
        padding-left: 5px;
    }
    .info{
        width: 200px;
        height: 40px;
    }
    .container-form{
        margin-right: 45px;
    }
    .date{
        width: 85px;
        height: 40px;
    }
    .csv{
        width: 85px;
        height: 40px;
    }
    .details-target{
        margin: auto;
        align-content: center;
        width: 500px;
    }
    .medios{
        margin-top: 10px;
    }
    .container-buttons{
        width: 100px;
        margin-top: 18px;
    }
    .button-primary{
        padding-top: 10px;
        width: 450px;
    }
    .box-child{
        display: flex;
        margin-bottom: 15px;
    }
    .slash{
        font-size: 25px;
        margin-right: 8px;
        color: #888;
    }
</style>