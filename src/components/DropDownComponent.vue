<template>
  <div class="menu-item" @click="isOpen = !isOpen">
      <a href="#">{{ title }}</a>
      <a href="#"><i class="fa fa-chevron-down"></i></a>
      <transition name="fade" appear>
        <div class="sub-menu" v-if="isOpen">
          <div v-for="(item, i) in items" :key="i" class="menu-item">
              <a :href="item.link">{{ item.title }}</a>
          </div>
        </div>
      </transition>
  </div>
</template>

<script>
export default {
    name: "DropDownComponet",
    props: ['title', 'items'],
    data () {
        return {
            isOpen: false
        }
    }
}
</script>

<style>
    nav .menu-item{
        padding: 10px 20px;
        position: relative;
        text-align: center;
        font-size: 1.1rem;
        border-bottom: 3px solid transparent;
        font-family: 'Montserrat', sans-serif;
        transition: 0.4s;
        
    }
    .menu-item.active,
    .menu-item:hover{
        background: #5c5d5f;
        border-bottom-color: #ff5858;
    }
    a{
        color: #FBFBFF;
        text-decoration: none;
        margin-right: 8px;
    }
    nav .menu-item .sub-menu {
        position: absolute;
        background-color: #222;
        top: calc(100% + 5px);
        left: 50%;
        transform: translateX(-50%);
        width: max-content;
        border-radius: 0px 0px 16px 16px;
    }
    .fade-leave-active,
    .fade-enter-active{
        transition: all .5s ease-out;
    }

    .fade-enter,
    .fade-leave-to{
        opacity: 0;
    }
    i{
        color: #000;
    }

</style>