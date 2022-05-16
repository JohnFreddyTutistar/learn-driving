<template>
  <div class="father-of-fathers">
        <div class="title-component">
            <div class="box-title"><h1>CATEGORIA: MOTOCICLETA</h1></div>
        </div>
        <div class="father-container">
            <div class="infocontainer">
                <div class="info-Class">
                    <p class="text-class">Clases teóricas: 25 teoría + 3 taller | Prácticas: 8 horas de moto</p>
                </div>
                <div class="category">
                    <p class="text-category">Categoría: A1</p>
                </div>
                <div class="cost">
                    <p class="cost-value">$ xxx xxx</p>
                </div>
                <div class="buttoncar">
                    <button>¡Quiero este curso!</button>
                </div>
            </div>
            <div class="infocontainer">
                <div class="info-Class">
                    <p class="text-class">Clases teóricas: 25 teoría + 3 taller | Prácticas: 15 horas de carro</p>
                </div>
                <div class="category">
                    <p class="text-category">Categoría: A2</p>
                </div>
                <div class="cost">
                    <p class="cost-value">$ xxx xxx</p>
                </div>
                <div>
                    <button class="buttoncar">¡Quiero este curso!</button>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'CategoryMoto'
}
</script>

<style scoped>
    .father-of.fathers{
        height: 900px;
    }
    .title-component{
        margin-top: 50px;
        font-family: 'Montserrat', sans-serif;
        color: #2A2D34;
        font-size: 20px;
        text-shadow: 1px 3px 3px #ff5858;
    }
    .box-title{
        width: 600px;
        margin: auto;
        padding: auto;
        font-family: 'Montserrat', sans-serif;
    }
    .father-container{
        height: 750px;
    }
    .infocontainer{
        margin: auto;
        padding: auto;
        width: 500px;
        margin-top: 45px;
        padding-bottom: 25px;
        background: #2A2D34;
        color: #fff;
        border-radius: 15px;
        font-family: 'Montserrat', sans-serif;
    }
    .text-class{
        font-size: 20px;
        text-align: center;
    }
    .text-category{
        padding-top: 25px;
        margin: auto;
        padding: auto;
        width: 150px;
        font-size: 20px;
    }
    .cost{
        border-bottom: solid 2px #ff5858; 
        margin: 8px;
        padding-left: 5px;
    }
    .cost-value{
        margin-top: 10px;
        margin-bottom: 10px;
    }
    button{
        align-content: center;
        align-items: center;
        width: 100%;
        height: 45px;
        background-color: #ff5858;
        border-radius: 15px;
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
        font-size: 18px;
        border: none;
        color: #fff;
    }
    button:hover{
        background: linear-gradient(to bottom, #ec1b1b, #c57d7d);
    }

</style>