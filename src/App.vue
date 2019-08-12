<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <transition :name="tranInout">
      <keep-alive>
        <router-view v-if="$route.meta.KeepAlive" class="anima"></router-view>
      </keep-alive>
    </transition>
    <transition :name="tranInout">
        <router-view v-if="!$route.meta.KeepAlive" class="anima"></router-view>
    </transition>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data(){
    return{
      tranInout:'slide-left',
    }
  },
  created(){
    this.$router.replace('/index')
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html,body,#app{
  height:100%;
  width:100%;
}
.anima{
  width:100%;
  height:100%;
  transition:all .5s;
}
.slide-left-enter{
  transform: translate(100%, 0);
}
.slide-left-leave-active{
  transform: translate(-50%, 0);
}
.slide-right-enter{
  transform: translate(-100%, 0);
}
.slide-right-leave-active{
  transform: translate(50%, 0);
}
</style>
