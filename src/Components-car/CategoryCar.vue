<template>
    <div class="father-of-fathers">
        <div class="title-component">
            <div class="box-title"><h1>CATEGORIA: VEHÍCULO</h1></div>
        </div>
        <div class="father-container">
            <div class="infocontainer">
                <div class="info-Class">
                    <p class="text-class">Clases teóricas: 30 teoría + 5 taller | Prácticas: 30 horas de carro</p>
                </div>
                <div class="category">
                    <p class="text-category">Categoría: C1</p>
                </div>
                <div class="cost">
                    <p class="cost-value">$ 1'571.000</p>
                </div>
                <div class="buttoncar">
                    <button><router-link to="/payment">¡COMIENZA YA!</router-link></button>
                </div>
            </div>
            <div class="infocontainer">
                <div class="info-Class">
                    <p class="text-class">Clases teóricas: 25 teoría + 5 taller | Prácticas: 20 horas de carro</p>
                </div>
                <div class="category">
                    <p class="text-category">Categoría: B1</p>
                </div>
                <div class="cost">
                    <p class="cost-value">$ 1'318.000</p>
                </div>
                <div>
                    <button><router-link to="/payment">¡COMIENZA YA!</router-link></button>
                </div>
            </div>
            <div class="infocontainer">
                <div class="info-Class">
                    <p class="text-class">Clases teóricas: 20 teoría + 5 taller | Prácticas: 15 horas de carro</p>
                </div>
                <div class="category">
                    <p class="text-category">Categoria: C2</p>
                </div>
                <div class="cost">
                    <p class="cost-value">$ 2'142.000</p>
                </div>
                <div>
                    <button><router-link to="/payment">¡COMIENZA YA!</router-link></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CategoryCar"
}
</script>

<style scoped>
    .father-of-fathers{
        height: 1050px;
    }
    .title-component{
        margin-top: 50px;
        color: #000;
        font-size: 20px;
        text-shadow: 1px 3px 3px #ff5858;
    }
    .box-title{
        width: 500px;
        margin: auto;
        padding: auto;
        font-family: 'Montserrat', sans-serif;
    }
    .father-container{
        height: 850px;
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