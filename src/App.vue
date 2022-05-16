<template>
  <div id="app">
    <div> 
      <menu-component></menu-component>
    </div>
    <router-view/>
  </div>
</template>

<script> // para que coño sirve el setup dentro de la etiqueta script
import MenuComponent from "../src/components/MenuComponent.vue"
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: { MenuComponent },
}

</script> 

<style>

</style>
