<template>
  <div class="container">
    <div class="child-container">
        <div class="title-contact">
            <h1>Contactenos</h1>
        </div>
        <div class="map-ubication">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.930019191426!2d-77.2806993490795!3d1.2090638623426313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2ed49b0d465fef%3A0xf43b9b932967a617!2sUniversidad%20Cesmag!5e0!3m2!1ses-419!2sco!4v1651522011085!5m2!1ses-419!2sco" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    <!-- <div class="container-top">
        <div class="info">
            <h2><b>Sede A</b></h2>
            <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, saepe molestiae! Adipisci quisquam quos quas dolorem exercitationem eos natus reprehenderit modi, repellat labore sunt distinctio, commodi, nihil reiciendis laudantium quasi!</b></p>
        </div>
        <div class="info">
            <h2>Sede B</h2>
            <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, saepe molestiae! Adipisci quisquam quos quas dolorem exercitationem eos natus reprehenderit modi, repellat labore sunt distinctio, commodi, nihil reiciendis laudantium quasi!</b></p>
        </div>
        <div class="info">
            <h2>Sede C</h2>
            <p><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, saepe molestiae! Adipisci quisquam quos quas dolorem exercitationem eos natus reprehenderit modi, repellat labore sunt distinctio, commodi, nihil reiciendis laudantium quasi!</b></p>
        </div>
    </div> -->
  </div>
</template>

<script>
export default {
 name: 'CategoryContact'
}
</script>

<style scoped>
    .container{
        background-color: #fff; 
        height: 650px;
    }
    .title-contact{
        color: #ff5858;
        margin: 60px;
        font-family: 'Montserrat', sans-serif;
        font-size: 25px;
        text-shadow: 1px 1px 1px #000; 
        text-align: center;
    }
    .map-ubication{
        display: flex;
        width: 88%;
        margin: auto;
        padding: auto;
        border: solid 1px #000;
    }
    .container-top{
        display: flex;
        color: #000;
        margin: 120px;
        font-family: 'Montserrat', sans-serif;
        text-align: justify;
    }
    .info{
        margin: 30px;
        border-left: solid 2px #d43535;
        padding-left: 40px;
        font-size: 13px;
    }
    h2{
        color: #ff5858;
        text-shadow: 1px 1px 1px #000;
        font-size: 35px;
        margin-bottom: 10px;
    }
</style>