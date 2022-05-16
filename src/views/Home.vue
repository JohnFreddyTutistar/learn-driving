<template>
  <div>
      <component-mv></component-mv>
  </div>
</template>

<script>

import ComponentMv from '../components/ComponentMv.vue'

export default {
    components:{
        ComponentMv,
    }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        transition: all .5s ease-in-out;
    }
</style>