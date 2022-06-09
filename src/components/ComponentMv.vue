<template>
    <div class="information-container">
        <div class="container-father">
            <div class="child-container">
                <h2 class="title-info">Misión</h2>
                <div class="info-up">
                  La academia de automovilismo CHALLENGER es una entidad privada y nariñense cuya misión integra las funciones sustantivas de la docencia y el conocimiento de la normatividad referente a la conducción con el objeto de formar conductores responsables que se interesen en aplicar el manejo defensivo-previsivo con único fin de salvaguardar la vida y bienes de todos los actores de la vía.     
                </div>
                  <h2 class="title-info">Visión</h2>
                <div class="info-up">
                En el año 2027, nos posesionaremos como el más destacado centro de enseñanza automovilística en el sur del país, dentro de los 7 años siguientes, con los más altos estándares de calidad y ética profesional mediante la capacitación objetiva, responsables de las nuevas generaciones de conductores, capacitando y actualizando en todo momento a nuestro personal, teórico, practivo y administrativo en lo relacionado a la educación vial, y conseguir que nuestra empresa brinde este servicio a nivel nacional.
                </div>     
            </div>
            <div class="image-container">
                <img class="img1" src="../assets/volante.png" alt="">
            </div> 
        </div>
        <div class="container-father">
            <div class="image-container">
                <img class="img2" src="../assets/licencia.jpg" alt="" >
            </div> 
            <div class="child-container">
                <h2>Etapas de aprendizaje</h2><br>
                <div class="info-up">
                    <h4 class="title-info">Aprendiz</h4>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rem architecto quos neque quas quod ratione. 
                </div>
                <div class="info-up">
                    <h4 class="title-info">Restringido</h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rem architecto quos neque quas quod ratione. 
                </div>  
                <div class="info-up">
                    <h4 class="title-info">Completo</h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam rem architecto quos neque quas quod ratione. 
                </div>    
            </div>
            
        </div>
        <div class="title-two">
            <h3>¿QUE VEHÍCULO DESEAS CONDUCIR?</h3>
            
        </div>
        <div class="img-categories">
            <img src="../assets/img3.jpg" alt="">
        </div>

        <div class="title-two">
            <h3>HERRAMIENTAS PARA NUEVOS CONDUCTORES</h3>
        </div>
        <div class="img-categories">
            <img @click="g" src="../assets/img4.jpg" alt="">
        </div>
    
    </div>
</template>

<script>
export default {
    name: "ComponentMv"
}
</script>

<style scoped>
    .information-container{
        /*display: flex;*/
        width: 70%;
        margin: auto;
        background-color: #fff;
        height: 2800px;
    }
    .title-two{
        display: flex;
        background-color: #ff5858;
        height: 50px;
        width: 500px;
        margin: auto;
    }
    h3{
        font-size: 20px;
    }
    .img-categories{
        display: flex;
    }
    img{
        margin: auto;
        width: 70%;
    }
    .img2{
        width: 500px;
    }
    h3{
        margin: auto;
        color: #fff;
    }

    .container-father{
        display: flex;
        height: 500px;
        margin-bottom: 100px;
    }
    .child-container{
        width: 50%;
        display: block;
        /*margin-bottom: 10px;*/
        padding: 15px;
        margin: 10px;
        border-radius: 15px;
        background: #fff;
    }
    .image-container{
        display: flex;
        width: 50%;
        align-content: center;
        align-items: center;
    }
    .img1{
        width: 290px;
        margin: auto;
    }
    .info-up{
        margin-bottom: 10px;
        position: relative;
        color: #000;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        text-align: justify;
        background-color: transparent;
    }
    .title-info{
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        padding-bottom: 10px;
        color: #ff5858;
    } 
    
</style>